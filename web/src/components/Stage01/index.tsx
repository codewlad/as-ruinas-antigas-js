import { useState, useEffect, useRef } from 'react';

import { GetBloquedTiles } from '../../utils/bloquedTiles';

import { Char } from '@components/Char';
import { Gamepad } from '@components/Gamepad';

import { Conteiner, Row, TileD, TileW, TileF, Torch } from './styles';
import { Message } from '@components/Message';

export const Stage01 = ({
	content,
	mainScreenWidth,
}: {
	content: React.RefObject<HTMLDivElement>;
	mainScreenWidth: number | undefined;
}) => {
	const [posX, setPosX] = useState(48 + 24);
	const [posY, setPosY] = useState(288 + 24);

	const [introStage01, setIntroStage01] = useState(true);

	const [step, setStep] = useState<string>('initial');
	const [dialog01, setDialog01] = useState(false);

	const conteinerRef = useRef<HTMLDivElement | null>(null);

	const updateTorchPosition = (newPosX: number, newPosY: number) => {
		setPosX(newPosX + 24);
		setPosY(newPosY + 24);
	};

	console.log(mainScreenWidth);

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

	useEffect(() => {
		switch (step) {
			case 'initial':
				break;
			case 'dialog01':
				setDialog01(true);
				break;
			case 'bandage':
				console.log('bandage');
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

			<Gamepad updateTorchPosition={updateTorchPosition} />

			{dialog01 && (
				<Message
					messages={[
						'Ai... ai...',
						'Mesmo com toda minha experiência, me deixei levar pela empolgação e acabei caindo nessa armadilha!',
						'Acho que machuquei minha perna. Ainda bem que guardei essas bandagens num bolso separado, porque tudo o que eu tinha ficou na mochila e não faço a menor idéia de onde ela foi parar.',
						'Está bem escuro e não consigo subir por onde caí. Espero que eu encontre o caminho para fora daqui o quanto antes...',
					]}
					onClose={() => closeMessage(setDialog01, 'bandage')}
					mainScreenWidth={mainScreenWidth}
				/>
			)}
		</Conteiner>
	);
};
