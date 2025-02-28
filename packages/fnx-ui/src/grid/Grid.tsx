import React, { cloneElement, forwardRef, isValidElement } from 'react';
import useProps from '../hooks/use-props';
import { BORDER_TOP } from '../utils/constants';
import { addUnit } from '../utils/format';
import { classnames, createBEM } from '../utils/namespace';
import { toElementArray } from '../utils/react';
import { GridContext } from './context';
import { GridProps } from './interface';

const NS = 'fnx-grid';
const bem = createBEM(NS);

type RequiredGridProps = Required<
	Pick<GridProps, 'columnSize' | 'clickable' | 'gutter' | 'border' | 'square'>
>;

const DEFAULT_PROPS: RequiredGridProps = {
	columnSize: 4,
	clickable: false,
	gutter: 0,
	border: true,
	square: false,
};

const Grid = forwardRef<HTMLDivElement, GridProps>((_props, ref) => {
	const [props, { className, children: _children, style, ...restProps }] =
		useProps<RequiredGridProps, GridProps>(DEFAULT_PROPS, _props);

	const { border, gutter } = props;

	const children = toElementArray(_children);

	return (
		<div
			className={classnames(
				bem(),
				border && gutter <= 0 ? BORDER_TOP : undefined,
				className,
			)}
			{...restProps}
			ref={ref}
			style={{ paddingLeft: addUnit(gutter), ...style }}
		>
			<GridContext.Provider value={props}>
				{children.map((child, idx) => {
					if (isValidElement<any>(child)) {
						return cloneElement(child, {
							key: child.key != null ? child.key : idx,
							...child.props,
							'data-fnx-grid-item-index': idx,
						});
					} else {
						return child;
					}
				})}
			</GridContext.Provider>
		</div>
	);
});

Grid.displayName = 'Grid';

export default Grid;
