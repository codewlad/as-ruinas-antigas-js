import React, { useState } from 'react';
import {
	Conteiner,
	Sticky,
	Pad,
	Up,
	Left,
	Right,
	Down,
	Goals,
	Items,
} from './styles';

import imgUp from '@assets/arrow-up.svg';
import imgLeft from '@assets/arrow-left.svg';
import imgRight from '@assets/arrow-right.svg';
import imgDown from '@assets/arrow-down.svg';
import imgStarBold from '@assets/star-bold.svg';

import { handleMovement } from '../../utils/characterMovement';

type UpdateTorchPosition = (left: number, top: number) => void;

export const Hud = ({
	updateTorchPosition,
	mainScreenWidth,
	goals,
}: {
	updateTorchPosition: UpdateTorchPosition;
	mainScreenWidth: number | undefined;
	goals: string;
}) => {
	const preventSpacebarActivation = (
		e: React.KeyboardEvent<HTMLButtonElement>
	) => {
		if (e.key === ' ' || e.key === 'Spacebar') {
			e.preventDefault();
		}
	};

	const [pressedButton, setPressedButton] = useState<string | null>(null);
	const [pressedButtonInterval, setPressedButtonInterval] = useState<
		number | undefined
	>(0);

	// Função para iniciar o movimento
	const startMovement = (direction: string) => {
		setPressedButton(direction);

		// Executar ação imediatamente
		handleMovement(direction, updateTorchPosition);

		// Configurar um intervalo para continuar a ação enquanto o botão estiver pressionado
		const interval = setInterval(() => {
			handleMovement(direction, updateTorchPosition);
		}, 100); // Chama a função a cada 100 milissegundos

		// Salvar o ID do intervalo para limpar posteriormente
		setPressedButtonInterval(interval);
	};

	// Função para parar o movimento quando o botão for solto
	const stopMovement = () => {
		if (pressedButton) {
			clearInterval(pressedButtonInterval);
			setPressedButton(null);
		}
	};

	// Evento para lidar com a saída do mouse da área do botão enquanto pressionado
	const handleMouseLeave = () => {
		if (pressedButton) {
			stopMovement();
		}
	};

	return (
		<Conteiner>
			<Sticky
				style={{
					width: `${mainScreenWidth}px`,
				}}
			>
				<Pad>
					<Up>
						<button
							onMouseDown={() => startMovement('ArrowUp')}
							onMouseUp={stopMovement}
							onMouseLeave={handleMouseLeave} // Adicione esse evento
							onTouchStart={() => startMovement('ArrowUp')}
							onTouchEnd={stopMovement}
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
							onMouseDown={() => startMovement('ArrowLeft')}
							onMouseUp={stopMovement}
							onMouseLeave={handleMouseLeave}
							onTouchStart={() => startMovement('ArrowLeft')}
							onTouchEnd={stopMovement}
							onKeyDown={preventSpacebarActivation}
						>
							<img
								src={imgLeft}
								alt='Seta para cima'
							/>
						</button>
					</Left>
					<Right style={{ userSelect: 'none' }}>
						<button
							onMouseDown={() => startMovement('ArrowRight')}
							onMouseUp={stopMovement}
							onMouseLeave={handleMouseLeave}
							onTouchStart={() => startMovement('ArrowRight')}
							onTouchEnd={stopMovement}
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
							onMouseDown={() => startMovement('ArrowDown')}
							onMouseUp={stopMovement}
							onMouseLeave={handleMouseLeave}
							onTouchStart={() => startMovement('ArrowDown')}
							onTouchEnd={stopMovement}
							onKeyDown={preventSpacebarActivation}
						>
							<img
								src={imgDown}
								alt='Seta para cima'
							/>
						</button>
					</Down>
				</Pad>

				{goals && (
					<Goals>
						<img
							src={imgStarBold}
							alt='Estrela'
						/>
						<p>{goals}</p>
					</Goals>
				)}

				<Items></Items>
			</Sticky>
		</Conteiner>
	);
};