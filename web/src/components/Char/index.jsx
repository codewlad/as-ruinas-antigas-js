import { usePositions } from '../../providers/positions';

import { Character } from './styles';

export const Char = () => {
	const { charX, charY } = usePositions();

	return (
		<Character
			style={{
				left: `${charX}px`,
				top: `${charY}px`,
			}}
		/>
	);
};
