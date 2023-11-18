import React, { useEffect } from 'react';

import { useSteps } from './steps';

export const EventsContext = React.createContext({});

export const EventsProvider = (props) => {
	const { step, setStep } = useSteps();

	const events = [
		{
			id: 'start-game',
			isActive: true,
			message: false,
		},
		{
			id: 'game-intro',
			isActive: false,
			message: false,
		},
	];

	const checkStep = (id) => {
		switch (id) {
			case 'start-game':
				setStep('game-intro');
				break;
			default:
				break;
		}
	};

	const handleEvent = (id, isActive, message, changeStep) => {
		events.map((event) => {
			if (id === 'start-game') {
				event.isActive = false;
				checkStep(id);
			} else if (event.id === id) {
				event.isActive = isActive;
				event.message = message;
				if (changeStep) checkStep(id);
			}
		});
	};

	useEffect(() => {
		console.log(step);
	}, [step]);

	return (
		<EventsContext.Provider value={{ events, handleEvent }}>
			{props.children}
		</EventsContext.Provider>
	);
};

export const useEvents = () => React.useContext(EventsContext);
