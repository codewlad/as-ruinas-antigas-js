import { useEffect } from 'react';

import { Conteiner, Row, TileD, TileW, TileF } from './styles';

import { useSteps } from '../../providers/steps';
import { useEvents } from '../../providers/events';
import { usePositions } from '../../providers/positions';

import { Char } from '../Char';
import { Hud } from '../Hud';
import { Message } from '../Message';

export const Stage01 = () => {
	const { step, setStep } = useSteps();
	const { handleEvent } = useEvents();
	const { setCharX, setCharY } = usePositions();

	const scene01Intro = () => {
		setTimeout(() => {
			handleEvent('stage01-intro', true, true);
		}, 1500);
	};

	useEffect(() => {
		setCharX(48);
		setCharY(288);

		scene01Intro();
	}, []);

	return (
		<Conteiner>
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

			<Char />

			<Hud />

			{step.name === 'stage01-dialog01' && (
				<Message
					messages={[
						'Ai... ai...',
						'Mesmo com toda minha experiência, me deixei levar pela empolgação e acabei caindo nessa armadilha!',
						'Acho que machuquei minha perna. Ainda bem que guardei essas bandagens num bolso separado, porque tudo o que eu tinha ficou na mochila e não faço a menor idéia de onde ela foi parar.',
						'Está bem escuro e não consigo subir por onde caí. Espero que eu encontre o caminho para fora daqui o quanto antes...',
					]}
					onClose={() => handleEvent('stage01-dialog01', false, true)}
				/>
			)}
		</Conteiner>
	);
};
