import React from 'react';

import { useSteps } from './steps';

export const EventsContext = React.createContext({});

const events = [
	{
		eventName: 'start-game',
		keepEvent: false,
	},
	{
		eventName: 'game-intro',
		keepEvent: false,
	},
	{
		eventName: 'stage01-intro',
		keepEvent: false,
	},
	{
		eventName: 'stage01-dialog01',
		keepEvent: false,
	},
];

export const EventsProvider = (props) => {
	const { step, setStep } = useSteps();

	const checkStep = (id) => {
		switch (id) {
			case 'game-intro':
				setStep('stage01-intro');
				break;
			case 'stage01-intro':
				setStep('stage01-dialog01');
				break;
			case 'stage01-dialog01':
				setStep('');
				console.log('chegou aqui');
				break;
			default:
				break;
		}
	};

	const handleEvent = (id, keepEvent, changeStep) => {
		events.map((event) => {
			if (event.eventName === id) {
				event.keepEvent = keepEvent;
				if (id === 'start-game') {
					setStep('game-intro');
				} else {
					if (changeStep) checkStep(id);
				}
			}
		});
	};

	return (
		<EventsContext.Provider value={{ handleEvent, events }}>
			{props.children}
		</EventsContext.Provider>
	);
};

export const useEvents = () => React.useContext(EventsContext);
