import React from 'react';

import { useSteps } from './steps';

export const EventsContext = React.createContext({});

const events = [
	{
		eventName: 'message',
		keepEvent: false,
	},
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
	const { step, setGameStep } = useSteps();

	const checkStep = (id) => {
		switch (id) {
			case 'game-intro':
				step.name = 'stage01-intro';
				setGameStep('stage01-intro');
				break;
			case 'stage01-intro':
				step.name = 'stage01-dialog01';
				setGameStep('stage01-dialog01');
				break;
			case 'stage01-dialog01':
				step.name = 'go';
				setGameStep('go');
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
					step.name = 'game-intro';
					setGameStep('game-intro');
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
