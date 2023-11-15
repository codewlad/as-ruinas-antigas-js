import imgItems from '../assets/items.png';

const frameX = (id) => {
	return ((id - 1) % 10) * 48 + 'px';
};

const frameY = (id) => {
	return Math.floor((id - 1) / 10) * 48 + 'px';
};

export const Items = [
	{
		id: 0,
		name: '',
		frame: ``,
		image: imgItems,
	},
	{
		id: 1,
		name: 'mochila',
		frame: `-${frameX(1)} -${frameY(1)}`,
		image: imgItems,
	},
	{
		id: 2,
		name: 'tocha',
		frame: `-${frameX(2)} -${frameY(2)}`,
		image: imgItems,
	},
];
