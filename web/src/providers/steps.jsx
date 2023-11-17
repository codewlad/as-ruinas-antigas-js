import React, { useState } from 'react';

export const StepsContext = React.createContext({});

export const StepsProvider = (props) => {
	const [step, setStep] = useState(null);

	return (
		<StepsContext.Provider value={{ step, setStep }}>
			{props.children}
		</StepsContext.Provider>
	);
};

export const useSteps = () => React.useContext(StepsContext);
