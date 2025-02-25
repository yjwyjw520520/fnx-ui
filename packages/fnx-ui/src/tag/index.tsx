import React, {
	CSSProperties,
	forwardRef,
	useContext,
	useImperativeHandle,
	useRef,
} from 'react';
import useControlledState from '../hooks/use-controlled-state';
import useProps from '../hooks/use-props';
import Icon from '../icon';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { TagProps } from './interface';
import { CSSTransition } from 'react-transition-group';
import ConfigProvider from '../config-provider';
import useDefaults from '../hooks/use-defaults';

const NS = 'fnx-tag';
const bem = createBEM(NS);

type TagRequiredProps = Required<
	Pick<TagProps, 'type' | 'size' | 'closeable' | 'onClose'>
>;

const DEFAULT_PROPS: TagRequiredProps = {
	type: 'default',
	size: 'md',
	closeable: false,
	onClose: noop,
};

const Tag = forwardRef<HTMLSpanElement, TagProps>((_props, ref) => {
	const [
		{ type, size, closeable, onClose },
		{
			color,
			textColor,
			visible: _visible,
			theme,
			closeIcon,
			className,
			style,
			children,
			transitionDuration: _transitionDuration,
			...restProps
		},
	] = useProps<TagRequiredProps, TagProps>(DEFAULT_PROPS, _props);

	const configContext = useContext(ConfigProvider.Context);

	const rootRef = useRef<HTMLSpanElement | null>(null);

	useImperativeHandle<HTMLSpanElement | null, HTMLSpanElement | null>(
		ref,
		() => rootRef.current,
	);

	const transitionDuration = useDefaults(
		configContext.transitionDuration,
		_transitionDuration,
	);

	const { value: visible, onChangeRef } = useControlledState({
		defaultValue: true,
		value: _visible,
		onChange: (v) => {
			if (!v) {
				onClose();
			}
		},
	});

	const formatStyle = (): CSSProperties => {
		const formattedStyle: CSSProperties = {};

		if (theme === 'plain') {
			formattedStyle.color = textColor || color;
			formattedStyle.borderColor = color;
		} else {
			formattedStyle.color = textColor;
			formattedStyle.backgroundColor = color;
		}

		if (
			transitionDuration != null &&
			transitionDuration !== configContext.transitionDuration
		) {
			formattedStyle.transitionDuration = `${transitionDuration}ms`;
		}

		return { ...formattedStyle, ...style };
	};

	return (
		<CSSTransition
			classNames="fnx-fade"
			in={visible}
			timeout={transitionDuration || 0}
			nodeRef={rootRef}
			unmountOnExit={true}
		>
			<span
				{...restProps}
				className={classnames(
					bem({
						[type]: true,
						[size]: size !== 'md',
						...(theme != null ? { [theme]: true } : {}),
					}),
					className,
				)}
				style={formatStyle()}
				ref={rootRef}
			>
				{children}
				{closeable && (
					<span
						className={bem('close')}
						onClick={(e) => {
							e.stopPropagation();
							onChangeRef.current(false);
						}}
					>
						{closeIcon || <Icon name="cross" />}
					</span>
				)}
			</span>
		</CSSTransition>
	);
});

Tag.displayName = 'Tag';

export type {
	TagComponentProps,
	TagProps,
	TagSize,
	TagTheme,
	TagType,
} from './interface';
export default Tag;
