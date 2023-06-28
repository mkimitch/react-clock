import React, { FC } from 'react';
import useCurrentDateTime from '../../hooks/useCurrentDateTime';

interface DateComponentProps {
	format: {
		year?: 'numeric' | '2-digit';
		month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
		day?: 'numeric' | '2-digit';
	};
}

interface TimeComponentProps {
	format: {
		hour?: 'numeric' | '2-digit';
		minute?: 'numeric' | '2-digit';
		second?: 'numeric' | '2-digit';
		hour12?: boolean;
	};
}

export const DateComponent: FC<DateComponentProps> = ({ format }) => {
	const dateTime = useCurrentDateTime();
	return <p>{dateTime.toLocaleDateString(undefined, format)}</p>;
};

export const TimeComponent: FC<TimeComponentProps> = ({ format }) => {
	const dateTime = useCurrentDateTime();
	return <p>{dateTime.toLocaleTimeString(undefined, format)}</p>;
};
