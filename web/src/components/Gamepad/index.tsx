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
	return (
		<Conteiner>
			<Sticky>
				<Pad>
					<Up>
						<button
							onClick={() =>
								handleMovement('ArrowUp', updateTorchPosition)
							}
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
