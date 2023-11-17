import React from 'react';

import { useSteps } from './steps';

export const EventsContext = React.createContext({});

export const EventsProvider = (props) => {
	const { step, setStep } = useSteps();

	const events = [
		{
			id: 'start-game',
			isActive: false,
			message: false,
		},
		{
			id: 'game-intro',
			isActive: false,
			message: false,
		},
	];

	const handleEvent = (id, changeStep) => {
		events.map((event) => {
			if (event.id === id) {
				event.isActive = true;
				console.log(event.isActive);
				if (changeStep) setStep(id);
			}
		});
	};

	return (
		<EventsContext.Provider value={{ events, handleEvent }}>
			{props.children}
		</EventsContext.Provider>
	);
};

export const useEvents = () => React.useContext(EventsContext);
