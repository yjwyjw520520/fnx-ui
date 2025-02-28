import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import useCompositionChange from '../hooks/use-composition-change';
import useControlledState from '../hooks/use-controlled-state';
import useFocus from '../hooks/use-focus';
import useProps from '../hooks/use-props';
import Icon from '../icon';
import { formatNumber } from '../utils/format';
import { classnames, createBEM } from '../utils/namespace';
import { FieldInputProps, FieldInputRef } from './interface';
import { limitValueLength, mapInputType } from './utils';

const NS = 'fnx-field-input';
const bem = createBEM(NS);

type FieldInputRequiredProps = Required<
	Pick<
		FieldInputProps,
		| 'defaultValue'
		| 'clearable'
		| 'type'
		| 'inputAlign'
		| 'clearIcon'
		| 'clearTrigger'
		| 'readOnly'
		| 'disabled'
	>
>;

const DEFAULT_PROPS: FieldInputRequiredProps = {
	defaultValue: '',
	type: 'text',
	inputAlign: 'left',
	clearable: false,
	clearIcon: <Icon name="cross-fill" />,
	clearTrigger: 'focus',
	readOnly: false,
	disabled: false,
};

const FieldInput = forwardRef<FieldInputRef, FieldInputProps>((_props, ref) => {
	const [
		{
			defaultValue,
			type: inputType,
			inputAlign,
			clearable,
			clearIcon,
			clearTrigger,
			readOnly,
			disabled,
		},
		{
			value: _value,
			onChange: _onChange,
			onFocus: _onFocus,
			onBlur: _onBlur,
			maxLength,
			className,
			style,
			...restProps
		},
	] = useProps<FieldInputRequiredProps, FieldInputProps>(
		DEFAULT_PROPS,
		_props,
	);

	const rootRef = useRef<HTMLSpanElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	useImperativeHandle<FieldInputRef, FieldInputRef>(ref, () => {
		return {
			root: rootRef.current,
			input: inputRef.current,
		};
	});

	const { value, onChangeRef, controlled } = useControlledState<string>({
		value: _value,
		defaultValue,
		onChange: _onChange,
	});

	let displayValue = value;
	if (maxLength != null && !controlled) {
		displayValue = limitValueLength(value, maxLength);
	}

	const handleValueChange = (nextValue: string) => {
		nextValue = limitValueLength(nextValue, maxLength);

		if (inputType === 'number' || inputType === 'digit') {
			const isNumber = inputType === 'number';

			nextValue = formatNumber(nextValue, {
				allowDot: isNumber,
				allowMinus: isNumber,
			});
		}

		if (nextValue !== value) {
			onChangeRef.current(nextValue);
		}
	};

	const {
		value: displayCompositionValue,
		onComposition,
		onChange: onCompositionValueChange,
	} = useCompositionChange(displayValue, handleValueChange);

	const { focus, onFocus, onBlur } = useFocus(value, {
		readonly: readOnly,
		node: inputRef,
		onFocus: _onFocus,
		onBlur: _onBlur,
	});

	const inputProps = useMemo(() => mapInputType(inputType), [inputType]);

	const renderClear = () => {
		if (clearable && !readOnly) {
			const hasValue = value !== '';
			const hasTrigger =
				clearTrigger === 'always' ||
				(clearTrigger === 'focus' && focus);

			if (hasValue && hasTrigger) {
				return (
					<i
						className={bem('clear')}
						onTouchStart={() => handleValueChange('')}
					>
						{clearIcon}
					</i>
				);
			}
		}
	};

	return (
		<span
			ref={rootRef}
			className={classnames(
				bem([
					{
						focused: focus,
						disabled,

						...(inputAlign !== 'left'
							? { [`text-${inputAlign}`]: true }
							: {}),
					},
				]),
				className,
			)}
			style={style}
		>
			<input
				{...restProps}
				className={bem('control')}
				ref={inputRef}
				value={displayCompositionValue}
				{...inputProps}
				disabled={disabled}
				readOnly={readOnly}
				onBlur={onBlur}
				onFocus={onFocus}
				onCompositionStart={onComposition}
				onCompositionEnd={onComposition}
				onChange={(e) => onCompositionValueChange(e.target.value)}
			/>
			{renderClear()}
		</span>
	);
});

FieldInput.displayName = 'FieldInput';

export default FieldInput;
