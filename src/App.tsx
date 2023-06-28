import {
	DateComponent,
	TimeComponent,
} from './components/DateTimeComponent/DateTimeComponent';
import React, { FC } from 'react';

const App: FC = () => {
	return (
		<div className='app'>
			<DateComponent
				format={{ year: 'numeric', month: 'long', day: 'numeric' }}
			/>
			<TimeComponent
				format={{
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
					hour12: true,
				}}
			/>
		</div>
	);
};

export default App;
