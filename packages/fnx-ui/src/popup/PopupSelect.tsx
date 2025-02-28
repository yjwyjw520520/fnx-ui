import React, {
	cloneElement,
	forwardRef,
	ForwardRefRenderFunction,
	isValidElement,
	ReactElement,
	ReactNode,
	useCallback,
} from 'react';
import useControlledState from '../hooks/use-controlled-state';
import useProps from '../hooks/use-props';
import { ForwardRefProps } from '../utils/interface';
import { noop } from '../utils/misc';
import { PopupSelectProps } from './interface';
import Popup from './Popup';

type PopupSelectRequiredProps = Required<
	Pick<
		PopupSelectProps,
		| 'selectConfirmTrigger'
		| 'selectCancelTrigger'
		| 'selectDefaultValuePropName'
		| 'trigger'
		| 'disabled'
		| 'onClose'
	>
>;

const DEFAULT_PROPS: PopupSelectRequiredProps = {
	selectConfirmTrigger: 'onConfirm',
	selectCancelTrigger: 'onCancel',
	selectDefaultValuePropName: 'defaultValue',
	trigger: 'onClick',
	disabled: false,
	onClose: noop,
};

const InternalPopupSelect: ForwardRefRenderFunction<
	HTMLDivElement,
	PopupSelectProps
> = (_props, ref) => {
	const [
		{
			selectConfirmTrigger,
			selectCancelTrigger,
			selectDefaultValuePropName,
			trigger,
			disabled,
			onClose,
		},
		{
			visible: _visible,
			value: _value,
			defaultValue,
			onChange: _onChange,
			select,
			position,
			children,
			...restProps
		},
	] = useProps<PopupSelectRequiredProps, PopupSelectProps>(
		DEFAULT_PROPS,
		_props,
	);

	const { value: visible, onChangeRef: setVisibleRef } = useControlledState({
		value: _visible,
		defaultValue: false,
	});

	const { value, onChangeRef } = useControlledState({
		value: _value,
		defaultValue,
		onChange: _onChange,
	});

	const call = useCallback(
		(eventName: string, props: any, ...args: any[]) => {
			if (props && typeof props[eventName] === 'function') {
				props[eventName](...args);
			}
		},
		[],
	);

	const renderSelect = (): ReactNode => {
		if (!isValidElement(select)) {
			return select;
		}

		return cloneElement(select, {
			...select.props,
			[selectDefaultValuePropName]:
				value !== undefined
					? value
					: select.props[selectDefaultValuePropName],
			[selectConfirmTrigger]: (...args: any[]) => {
				call(selectConfirmTrigger, select.props, ...args);
				(onChangeRef.current as any)(...args);
				setVisibleRef.current(false);
			},
			[selectCancelTrigger]: (...args: any[]) => {
				call(selectCancelTrigger, select.props, ...args);
				setVisibleRef.current(false);
				onClose();
			},
		});
	};

	const renderChildren = (): ReactNode => {
		let child = children;

		if (typeof children === 'function') {
			child = (children as any)(value);
		}

		if (!isValidElement(child)) {
			return child;
		}

		return cloneElement(child, {
			...child.props,
			[trigger]: (...args: any[]) => {
				if (!disabled) {
					setVisibleRef.current(true);
				}

				call(trigger, child && (child as any).props, ...args);
			},
		});
	};

	return (
		<>
			<Popup
				visible={visible}
				{...restProps}
				position={position || 'bottom'}
				onClose={() => {
					setVisibleRef.current(false);
					onClose();
				}}
				ref={ref}
			>
				{renderSelect()}
			</Popup>
			{renderChildren()}
		</>
	);
};

InternalPopupSelect.displayName = 'PopupSelect';

const PopupSelect = forwardRef<HTMLDivElement, PopupSelectProps>(
	InternalPopupSelect,
) as <T = any>(
	props: ForwardRefProps<PopupSelectProps<T>, HTMLDivElement>,
) => ReactElement;

export default PopupSelect;
