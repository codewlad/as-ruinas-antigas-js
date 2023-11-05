import { useState, useEffect, useRef } from 'react';

import { GetBloquedTiles } from '../../utils/bloquedTiles';
import { HandleMovementStatus } from '../../utils/characterMovement';
import { HandleKeyPress } from '../../utils/keyMapping';

import { Items } from '../../utils/items';

import { Char } from '@components/Char';
import { Hud } from '@components/Hud';
import { Message } from '@components/Message';

import { Conteiner, Row, TileD, TileW, TileF, Torch, Item } from './styles';

export const Stage01 = ({
	content,
	mainScreenWidth,
}: {
	content: React.RefObject<HTMLDivElement>;
	mainScreenWidth: number | undefined;
}) => {
	const torch = Items[2];

	const [posX, setPosX] = useState(48 + 24);
	const [posY, setPosY] = useState(288 + 24);

	const [introStage01, setIntroStage01] = useState(true);

	const [step, setStep] = useState<string>('initial stage');
	const [goals, setGoals] = useState<string>('');
	const [dialog01, setDialog01] = useState(false);

	const conteinerRef = useRef<HTMLDivElement | null>(null);

	const updateTorchPosition = (newPosX: number, newPosY: number) => {
		setPosX(newPosX + 24);
		setPosY(newPosY + 24);
	};

	const scene01 = () => {
		conteinerRef.current!.style.animation =
			'fade-in 1s forwards, moveRightLeft 0.5s ease-in-out 2';

		setTimeout(() => {
			setIntroStage01(false);
			setStep('dialog01');
		}, 1500);
	};

	const closeMessage = (
		setStateFunction: React.Dispatch<React.SetStateAction<boolean>>,
		step: string
	) => {
		setStateFunction(false);
		setStep(step);
	};

	const handleKeyPress = (event: KeyboardEvent) => {
		const key = event.key;
		const id = 'stage';
		const keyPressReturn = HandleKeyPress({ key, id });

		if (keyPressReturn && step === 'stage') {
			console.log('stage');
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, [handleKeyPress]);

	useEffect(() => {
		HandleMovementStatus(false);

		console.log('STEP -> ', step);

		switch (step) {
			case 'initial stage':
				break;
			case 'dialog01':
				setDialog01(true);
				break;
			case 'stage':
				setGoals('Encontre e acenda uma tocha');
				HandleMovementStatus(true);
				break;
			default:
				break;
		}
	}, [step]);

	useEffect(() => {
		GetBloquedTiles();

		if (introStage01) {
			scene01();
		}
	}, []);

	return (
		<Conteiner ref={conteinerRef}>
			{/* line 1*/}
			<Row>
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
			</Row>

			{/* line 2*/}
			<Row>
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
			</Row>

			{/* line 3*/}
			<Row>
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
			</Row>

			{/* line 4*/}
			<Row>
				<TileD className='td' />
				<TileD className='td' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD className='td' />
				<TileD className='td' />
			</Row>

			{/* line 5*/}
			<Row>
				<TileD className='td' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD className='td' />
			</Row>

			{/* line 6*/}
			<Row>
				<TileD className='td' />
				<TileW className='tw' />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileW className='tw' />
				<TileD className='td' />
			</Row>

			{/* line 7*/}
			<Row>
				<TileD className='td' />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileD className='td' />
			</Row>

			{/* line 8*/}
			<Row>
				<TileD className='td' />
				<TileD className='td' />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileD className='td' />
				<TileD className='td' />
			</Row>

			{/* line 9*/}
			<Row>
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
			</Row>

			{/* line 10*/}
			<Row>
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileW className='tw' />
				<TileW className='tw' />
			</Row>

			{/* line 11*/}
			<Row>
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
			</Row>

			<Char
				updateTorchPosition={updateTorchPosition}
				content={content}
			/>
			<Torch
				style={{
					background: `radial-gradient(circle at ${posX}px ${posY}px, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 200px)`,
				}}
			/>

			<Hud
				updateTorchPosition={updateTorchPosition}
				mainScreenWidth={mainScreenWidth}
				goals={goals}
			/>

			{dialog01 && (
				<Message
					messages={[
						'Ai... ai...',
						'Mesmo com toda minha experiência, me deixei levar pela empolgação e acabei caindo nessa armadilha!',
						'Acho que machuquei minha perna. Ainda bem que guardei essas bandagens num bolso separado, porque tudo o que eu tinha ficou na mochila e não faço a menor idéia de onde ela foi parar.',
						'Está bem escuro e não consigo subir por onde caí. Espero que eu encontre o caminho para fora daqui o quanto antes...',
					]}
					onClose={() => closeMessage(setDialog01, 'stage')}
					mainScreenWidth={mainScreenWidth}
				/>
			)}

			<Item
				style={{
					top: '432px',
					left: '432px',
					background: `url(${torch.image})`,
					backgroundPosition: `${torch.frame}`,
				}}
			></Item>
		</Conteiner>
	);
};
