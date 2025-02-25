import { HTMLAttributes, ReactNode } from 'react';
import CalendarDay from './CalendarDay';
import CalendarMulti from './CalendarMulti';
import CalendarRange from './CalendarRange';

export type CalendarValue = Date | string | number;

export type CalendarDayType =
	| 'normal'
	| 'start'
	| 'start-end'
	| 'middle'
	| 'end'
	| 'selected'
	| 'multiple-middle'
	| 'multiple-selected'
	| 'disabled';

export interface CalendarDayComponentProps {
	color?: string;
	dayHeight?: string;
	date: Date;
	content?: ReactNode;
	type: CalendarDayType;
	topInfo?: ReactNode;
	bottomInfo?: ReactNode;
}

export type CalendarDayProps = CalendarDayComponentProps &
	HTMLAttributes<HTMLDivElement>;

export interface CalendarSlots {
	day?: (day: CalendarDayComponentProps) => ReactNode;
	subTitle?: boolean | ((date: Date) => ReactNode);
	monthMark?: boolean | ((date: Date) => ReactNode);
	monthTitle?: boolean | ((date: Date) => ReactNode);
	footer?: ReactNode;
}

export interface CalendarBaseProps {
	title?: ReactNode;
	color?: string;
	minDate?: Date | string | number;
	maxDate?: Date | string | number;
	dayHeight?: number | string;
	readonly?: boolean;
	closeIcon?: ReactNode;
	firstDayOfWeek?: number;
	slots?: CalendarSlots;
	confirmText?: string;
	confirmDisabledText?: string;
}

export type CalendarElementProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	'defaultValue' | 'onChange' | 'title'
>;

export interface CalendarComponentProps extends CalendarBaseProps {
	defaultValue?: CalendarValue;
	onChange?: (value: Date) => void;
	onConfirm?: (value?: Date) => void;
	onCancel?: () => void;
}

export type CalendarProps = CalendarComponentProps & CalendarElementProps;

export interface CalendarRangeComponentProps extends CalendarBaseProps {
	defaultValue?: CalendarValue[];
	onChange?: (value: Date[]) => void;
	onConfirm?: (value?: Date[]) => void;
	onCancel?: () => void;
	allowSameDay?: boolean;
	maxSize?: number;
	onMaxSize?: () => void;
}

export type CalendarRangeProps = CalendarRangeComponentProps &
	CalendarElementProps;

export interface CalendarMultiComponentProps extends CalendarBaseProps {
	defaultValue?: CalendarValue[];
	onChange?: (value: Date[]) => void;
	onConfirm?: (value?: Date[]) => void;
	onCancel?: () => void;
	maxSize?: number;
	onMaxSize?: () => void;
}

export type CalendarMultiProps = CalendarMultiComponentProps &
	CalendarElementProps;

export interface CalendarExportExtra {
	Range: typeof CalendarRange;
	Multi: typeof CalendarMulti;
	Day: typeof CalendarDay;
}
