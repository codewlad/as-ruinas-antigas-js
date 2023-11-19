import React, { useState } from 'react';

export const StepsContext = React.createContext({});

const step = {
	name: 'start-game',
};

export const StepsProvider = (props) => {
	const [gameStep, setGameStep] = useState(null);

	return (
		<StepsContext.Provider value={{ step, gameStep, setGameStep }}>
			{props.children}
		</StepsContext.Provider>
	);
};

export const useSteps = () => React.useContext(StepsContext);
