import { useState, useEffect } from 'react';

const useCurrentDateTime = (): Date => {
	const [ dateTime, setDateTime ] = useState( new Date() );

	useEffect( () => {
		const timer = setInterval( () => {
			setDateTime( new Date() );
		}, 1000 );

		return () => {
			clearInterval( timer );
		};
	}, [] );

	return dateTime;
};

export default useCurrentDateTime;
