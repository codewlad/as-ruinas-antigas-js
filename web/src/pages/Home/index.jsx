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
		const { id, isActive, message, changeStep } = keyPressReturn;
		handleEvent(id, isActive, message, changeStep);
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

			{step === 'start-game' && (
				<Content>
					<button
						id='buttonStartGame'
						onClick={() =>
							handleEvent('start-game', false, false, true)
						}
					>
						<Start>
							Iniciar
							<KeyboardLetter>A</KeyboardLetter>
						</Start>
						<Totem />
					</button>
				</Content>
			)}

			{step === 'game-intro' && <div>intro</div>}
		</Container>
	);
};
