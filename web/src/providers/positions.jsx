import React, { useState } from 'react';

export const PositionsContext = React.createContext({});

export const PositionsProvider = (props) => {
	const [mainScreenWidth, setMainScreenWidth] = useState(0);
	const [mainScreenContent, setMainScreenContent] = useState(null);

	const [charX, setCharX] = useState(48);
	const [charY, setCharY] = useState(0);

	return (
		<PositionsContext.Provider
			value={{
				mainScreenWidth,
				setMainScreenWidth,
				mainScreenContent,
				setMainScreenContent,
				charX,
				setCharX,
				charY,
				setCharY,
			}}
		>
			{props.children}
		</PositionsContext.Provider>
	);
};

export const usePositions = () => React.useContext(PositionsContext);
