import { useState, useEffect, useRef } from 'react';

import { useItems } from '../../providers/items';

import { GetBloquedTiles } from '../../utils/bloquedTiles';
import { HandleMovementStatus } from '../../utils/characterMovement';
import { HandleKeyPress } from '../../utils/keyMapping';
import { GetStageEvents, RemoveEvent } from '../../utils/stageEvents';

//import { Items } from '../../utils/items';

import { Char } from '../Char';
import { Hud } from '../Hud';
import { Message } from '../Message';

import { Conteiner, Row, TileD, TileW, TileF, Torch, Item } from './styles';

export const Stage01 = ({ content, mainScreenWidth }) => {
	const { torch, setTorch } = useItems();
	console.log(torch);

	const [posX, setPosX] = useState(48 + 24);
	const [posY, setPosY] = useState(288 + 24);

	const [introStage01, setIntroStage01] = useState(true);

	const [step, setStep] = useState('initial stage');
	const [dialog01, setDialog01] = useState(false);
	const [messageGetTorch, setMessageGetTorch] = useState(false);

	const [goals, setGoals] = useState([]);

	const conteinerRef = useRef(null);

	const updateGoals = (id) => {
		const updatedGoals = goals.map((goal) => {
			if (goal.id === id) {
				return { ...goal, status: 'complete' };
			}
			return goal;
		});
		setGoals(updatedGoals);
	};

	const updateTorchPosition = (newPosX, newPosY) => {
		setPosX(newPosX + 24);
		setPosY(newPosY + 24);
	};

	const scene01 = () => {
		conteinerRef.current.style.animation =
			'fade-in 1s forwards, moveRightLeft 0.5s ease-in-out 2';

		setTimeout(() => {
			setIntroStage01(false);
			setStep('dialog01');
		}, 1500);
	};

	const closeMessage = (setStateFunction, step) => {
		setStateFunction(false);
		setStep(step);
	};

	const getTorch = () => {
		torch.messageItem = true;
		console.log(torch.messageItem);
		setStep('');
		updateGoals('event0001-torch');
		RemoveEvent('event0001-torch');
		GetBloquedTiles();
		GetStageEvents();
	};

	const handleKeyPress = (event) => {
		const key = event.key;
		const id = 'stage';
		const keyPressReturn = HandleKeyPress({ key, id });

		if (keyPressReturn && keyPressReturn !== true && step === 'stage') {
			if ('event' in keyPressReturn) {
				switch (keyPressReturn.event) {
					case 'event0001-torch':
						getTorch();
						break;
					default:
						console.log('stage');
						break;
				}
			}
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

		switch (step) {
			case 'initial stage':
				break;
			case 'dialog01':
				setDialog01(true);
				break;
			case 'firstObjectives':
				setGoals([
					{
						id: 'event0002-flint',
						message: 'Encontre uma pederneira',
						status: 'active',
					},
					{
						id: 'event0001-torch',
						message: 'Encontre uma tocha',
						status: 'active',
					},
					{
						id: 'event0003-acenda',
						message: 'Acenda a tocha e encontre a saída',
						status: 'active',
					},
				]);
				setStep('stage');
				break;
			case 'stage':
				break;
			default:
				break;
		}
		HandleMovementStatus(true);
	}, [step]);

	useEffect(() => {
		GetBloquedTiles();
		GetStageEvents();

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
				updateGoals={updateGoals}
				setStep={setStep}
			/>

			{dialog01 && (
				<Message
					messages={[
						'Ai... ai...',
						'Mesmo com toda minha experiência, me deixei levar pela empolgação e acabei caindo nessa armadilha!',
						'Acho que machuquei minha perna. Ainda bem que guardei essas bandagens num bolso separado, porque tudo o que eu tinha ficou na mochila e não faço a menor idéia de onde ela foi parar.',
						'Está bem escuro e não consigo subir por onde caí. Espero que eu encontre o caminho para fora daqui o quanto antes...',
					]}
					onClose={() => closeMessage(setDialog01, 'firstObjectives')}
					mainScreenWidth={mainScreenWidth}
				/>
			)}

			<Item
				className='item'
				id='event0001-torch'
				style={{
					top: '432px',
					left: '432px',
					background: `url(${torch.image})`,
					backgroundPosition: `${torch.frame}`,
				}}
			></Item>

			{torch.messageItem && (
				<Message
					messages={['Pegou a tocha!']}
					onClose={() =>
						closeMessage(setStateFunction, torch, 'event0001-torch')
					}
					mainScreenWidth={mainScreenWidth}
				/>
			)}
		</Conteiner>
	);
};
