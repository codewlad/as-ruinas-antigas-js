import { Conteiner, Sticky, Pad, Up, Left, Right, Down } from './styles';

import imgUp from '@assets/arrow-up.svg';
import imgLeft from '@assets/arrow-left.svg';
import imgRight from '@assets/arrow-right.svg';
import imgDown from '@assets/arrow-down.svg';

import { handleMovement } from '../../utils/characterMovement';

type UpdateTorchPosition = (left: number, top: number) => void;

export const Gamepad = ({
	updateTorchPosition,
}: {
	updateTorchPosition: UpdateTorchPosition;
}) => {
	const preventSpacebarActivation = (
		e: React.KeyboardEvent<HTMLButtonElement>
	) => {
		if (e.key === ' ' || e.key === 'Spacebar') {
			e.preventDefault();
		}
	};

	return (
		<Conteiner>
			<Sticky>
				<Pad>
					<Up>
						<button
							onClick={() =>
								handleMovement('ArrowUp', updateTorchPosition)
							}
							onKeyDown={preventSpacebarActivation}
						>
							<img
								src={imgUp}
								alt='Seta para cima'
							/>
						</button>
					</Up>
					<Left>
						<button
							onClick={() =>
								handleMovement('ArrowLeft', updateTorchPosition)
							}
							onKeyDown={preventSpacebarActivation}
						>
							<img
								src={imgLeft}
								alt='Seta para cima'
							/>
						</button>
					</Left>
					<Right>
						<button
							onClick={() =>
								handleMovement(
									'ArrowRight',
									updateTorchPosition
								)
							}
							onKeyDown={preventSpacebarActivation}
						>
							<img
								src={imgRight}
								alt='Seta para cima'
							/>
						</button>
					</Right>
					<Down>
						<button
							onClick={() =>
								handleMovement('ArrowDown', updateTorchPosition)
							}
							onKeyDown={preventSpacebarActivation}
						>
							<img
								src={imgDown}
								alt='Seta para cima'
							/>
						</button>
					</Down>
				</Pad>
			</Sticky>
		</Conteiner>
	);
};
