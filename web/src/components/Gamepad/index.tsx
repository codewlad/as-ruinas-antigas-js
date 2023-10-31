import { Conteiner, Up, Left, Right, Down } from './styles';

import imgUp from '@assets/arrow-up.svg';
import imgLeft from '@assets/arrow-left.svg';
import imgRight from '@assets/arrow-right.svg';
import imgDown from '@assets/arrow-down.svg';

export const Gamepad = () => {
	const handleGamepadClick = (key: string) => {
		console.log(key);
	};

	return (
		<Conteiner>
			<Up>
				<button onClick={() => handleGamepadClick('ArrowUp')}>
					<img
						src={imgUp}
						alt='Seta para cima'
					/>
				</button>
			</Up>
			<Left>
				<button onClick={() => handleGamepadClick('ArrowLeft')}>
					<img
						src={imgLeft}
						alt='Seta para cima'
					/>
				</button>
			</Left>
			<Right>
				<button onClick={() => handleGamepadClick('ArrowRight')}>
					<img
						src={imgRight}
						alt='Seta para cima'
					/>
				</button>
			</Right>
			<Down>
				<button onClick={() => handleGamepadClick('ArrowDown')}>
					<img
						src={imgDown}
						alt='Seta para cima'
					/>
				</button>
			</Down>
		</Conteiner>
	);
};
