import { HTMLAttributes, ReactNode } from 'react';
import Swipe from './Swipe';
import SwipeItem from './SwipeItem';

export interface SwipeComponentProps {
	width?: number;
	height?: number;
	onActiveIndexChange?: (current: number) => void;
	autoplay?: number;
	duration?: number;
	defaultActiveIndex?: number;
	loop?: boolean;
	vertical?: boolean;
	touchable?: boolean;
	indicator?: ReactNode;
	stopPropagation?: boolean;
}

export type SwipeComponentRequiredProps = Required<SwipeComponentProps>;

export type SwipeProps = SwipeComponentProps & HTMLAttributes<HTMLDivElement>;

export type SwipeItemProps = HTMLAttributes<HTMLDivElement>;

export interface SwipeRef {
	root: HTMLElement | null;
	wrapper: HTMLElement | null;
	reset: () => void;
	next: () => void;
	prev: () => void;
	swipeTo: (index: number, options?: { animation?: boolean }) => void;
}

export type SwipeComponent = typeof Swipe;
export type SwipeItemComponent = typeof SwipeItem;

export interface SwipeExportExtra {
	Item: SwipeItemComponent;
}
