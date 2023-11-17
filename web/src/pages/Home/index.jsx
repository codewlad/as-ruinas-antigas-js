import { useEffect } from 'react';

import { useSteps } from '../../providers/steps';
import { useEvents } from '../../providers/events';
import { HandleKeyPress } from '../../utils/keyMapping';

import { Totem } from '../../components/Totem';

import { Container, Content, Start, KeyboardLetter } from './styles';

export const Home = () => {
	const { step } = useSteps();
	const { handleEvent } = useEvents();

	const handleKeyPress = (event) => {
		const key = event.key;
		const keyPressReturn = HandleKeyPress(step, key);
		const { id, changeStep } = keyPressReturn;
		handleEvent(id, changeStep);
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

	useEffect(() => {
		console.log('Step -> ', step);
	}, [step]);

	return (
		<Container>
			<h1>As Ruínas Antigas</h1>

			<Content>
				<button
					id='buttonStartGame'
					onClick={() => handleEvent('start-game', true)}
				>
					<Start>
						Iniciar
						<KeyboardLetter>A</KeyboardLetter>
					</Start>
					<Totem />
				</button>
			</Content>
		</Container>
	);
};
