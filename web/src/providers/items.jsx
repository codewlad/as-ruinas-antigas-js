import React, { useState } from 'react';

import imgItems from '../assets/items.png';

const frameX = (id) => {
	return ((id - 1) % 10) * 48 + 'px';
};

const frameY = (id) => {
	return Math.floor((id - 1) / 10) * 48 + 'px';
};

export const ItemsContext = React.createContext({});

export const ItemsProvider = (props) => {
	const [torch, setTorch] = useState({
		id: 2,
		name: 'Tocha',
		image: imgItems,
		frame: `-${frameX(2)} -${frameY(2)}`,
		quantity: 0,
		isActive: false,
		messageItem: false,
	});

	return (
		<ItemsContext.Provider value={{ torch, setTorch }}>
			{props.children}
		</ItemsContext.Provider>
	);
};

export const useItems = () => React.useContext(ItemsContext);
