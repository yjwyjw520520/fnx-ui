import { Field as RcField } from 'rc-field-form';
import FieldContext from 'rc-field-form/lib/FieldContext';
import { Meta } from 'rc-field-form/lib/interface';
import React, {
	cloneElement,
	FC,
	isValidElement,
	memo,
	ReactNode,
	useContext,
	useRef,
} from 'react';
import { FormRequiredMark } from '.';
import Field from '../field';
import useDefaults from '../hooks/use-defaults';
import useProps from '../hooks/use-props';
import { devWarning } from '../utils/misc';
import { FormContext, FormItemContext } from './context';
import { FormItemProps } from './interface';

interface MemoInputProps {
	value: any;
	update: number;
	children: ReactNode;
}

const MemoInput = memo(
	({ children }: MemoInputProps) => children as JSX.Element,
	(prev, next) => prev.value === next.value && prev.update === next.update,
);

MemoInput.displayName = 'MemoInput';

type FormItemRequiredProps = Required<
	Pick<FormItemProps, 'trigger' | 'valuePropName'>
>;

const DEFAULT_PROPS: FormItemRequiredProps = {
	trigger: 'onChange',
	valuePropName: 'value',
};

const FormItem: FC<FormItemProps> = (_props) => {
	const [
		{ trigger, valuePropName },
		{
			children,
			validateTrigger: _validateTrigger,
			label,
			labelWidth,
			labelAlign,
			labelProps,
			controlPrefix,
			controlSuffix,
			controlProps,
			colon,
			requiredMark: _requiredMark,
			disabled,
			helpAlign,
			help,
			border,
			itemsAlign,
			clickable,
			plain,
			fieldProps,
			...restProps
		},
	] = useProps<FormItemRequiredProps, FormItemProps>(DEFAULT_PROPS, _props);

	const formContext = useContext(FormContext);
	const fieldContext = useContext(FieldContext);

	const requiredMark = useDefaults<FormRequiredMark>(
		'auto',
		_requiredMark,
		formContext.requiredMark,
	);

	const validateTrigger = useDefaults(
		_validateTrigger,
		fieldContext.validateTrigger,
	);

	// Record for real component render
	const updateRef = useRef(0);
	updateRef.current += 1;

	const isRenderProps = typeof children === 'function';

	const hasName = restProps.name != null;

	const renderChildren = (
		baseChildren: ReactNode,
		meta?: Meta,
		isRequired?: boolean,
	): JSX.Element => {
		if (plain) {
			return (
				<FormItemContext.Provider value={{ meta, isRequired }}>
					{baseChildren}
				</FormItemContext.Provider>
			);
		}

		return (
			<FormItemContext.Provider value={{ meta, isRequired }}>
				<Field
					label={label}
					labelWidth={labelWidth}
					labelAlign={labelAlign}
					labelProps={labelProps}
					controlPrefix={controlPrefix}
					controlSuffix={controlSuffix}
					controlProps={controlProps}
					colon={colon}
					disabled={disabled}
					helpAlign={helpAlign}
					help={help}
					border={border}
					itemsAlign={itemsAlign}
					clickable={clickable}
					{...fieldProps}
				>
					{baseChildren}
				</Field>
			</FormItemContext.Provider>
		);
	};

	if (!hasName && !isRenderProps && !restProps.dependencies) {
		return renderChildren(children);
	}

	return (
		<RcField
			valuePropName={valuePropName}
			{...restProps}
			trigger={trigger}
			validateTrigger={validateTrigger}
		>
			{(control, meta, form) => {
				const { shouldUpdate, dependencies } = restProps;

				let isRequired = false;

				if (requiredMark === true) {
					isRequired = true;
				} else if (requiredMark === 'auto') {
					isRequired = (restProps.rules || []).some((rule) => {
						if (rule && typeof rule === 'object' && rule.required) {
							return true;
						}

						return false;
					});
				}

				const mergedControl: typeof control = {
					...control,
				};

				let childNode: ReactNode;

				if (Array.isArray(children) && hasName) {
					devWarning(
						false,
						'Form.Item',
						'`children` is array of render props cannot have `name`.',
					);
					childNode = children;
				} else if (
					isRenderProps &&
					(!(shouldUpdate || dependencies) || hasName)
				) {
					devWarning(
						!!(shouldUpdate || dependencies),
						'Form.Item',
						'`children` of render props only work with `shouldUpdate` or `dependencies`.',
					);
					devWarning(
						!hasName,
						'Form.Item',
						'Do not use `name` with `children` of render props since it is not a field.',
					);
				} else if (dependencies && !isRenderProps && !hasName) {
					devWarning(
						false,
						'Form.Item',
						'Must set `name` or use render props when `dependencies` is set.',
					);
				} else if (isValidElement(children)) {
					devWarning(
						children.props.defaultValue === undefined,
						'Form.Item',
						'`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.',
					);

					const childProps = { ...children.props, ...mergedControl };

					if (meta) {
						childProps['data-field-id'] = meta.name
							? meta.name
							: '';
					}
					// We should keep user origin event handler
					const triggers = new Set<string>([trigger]);
					if (validateTrigger) {
						for (const t of Array.isArray(validateTrigger)
							? validateTrigger
							: [validateTrigger]) {
							triggers.add(t);
						}
					}

					triggers.forEach((eventName) => {
						childProps[eventName] = (...args: any[]) => {
							const me = mergedControl[eventName];
							const ce = children.props[eventName];

							me && me(...args);
							ce && ce(...args);
						};
					});

					childNode = (
						<MemoInput
							value={mergedControl[valuePropName || 'value']}
							update={updateRef.current}
						>
							{cloneElement(children, childProps)}
						</MemoInput>
					);
				} else if (
					isRenderProps &&
					(shouldUpdate || dependencies) &&
					!hasName
				) {
					childNode = (children as any)(form);
				} else {
					childNode = children;
				}

				return renderChildren(childNode, meta, isRequired);
			}}
		</RcField>
	);
};

FormItem.displayName = 'FormItem';

export default FormItem;
