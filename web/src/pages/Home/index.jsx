import { useEffect, useRef } from 'react';

import { useSteps } from '../../providers/steps';
import { useEvents } from '../../providers/events';
import { usePositions } from '../../providers/positions';
import { HandleKeyPress } from '../../utils/keyMapping';

import { Totem } from '../../components/Totem';
import { Message } from '../../components/Message';
import { Stage01 } from '../../components/Stage01';

import { Container, Content, Start, KeyboardLetter } from './styles';

export const Home = () => {
	const { step } = useSteps();
	const { handleEvent, events } = useEvents();
	const { setMainScreenWidth, setMainScreenContent, charX } = usePositions();

	const content = useRef(null);

	const handleResize = () => {
		setMainScreenWidth(content.current.offsetWidth);
		const scrollLeft =
			Math.ceil((charX - content.current.offsetWidth / 2) / 48) * 48;

		if (scrollLeft > 0) {
			content.current.scrollLeft = scrollLeft;
		} else {
			content.current.scrollLeft = 0;
		}
	};

	const handleKeyPress = (event) => {
		const key = event.key;
		const keyPressReturn = HandleKeyPress(step, key);
		const { id, keepEvent, changeStep } = keyPressReturn;
		handleEvent(id, keepEvent, changeStep);
	};

	useEffect(() => {
		setMainScreenContent(content);

		window.addEventListener('keydown', handleKeyPress);

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

	useEffect(() => {
		console.log('Step -> ', step);
		if (step !== 'start-game') {
			content.current.style.alignItems = 'flex-start';
		}
	}, [step]);

	return (
		<Container>
			<h1>As Ruínas Antigas</h1>

			<Content ref={content}>
				{step === 'start-game' && (
					<>
						<button
							id='buttonStartGame'
							onClick={() =>
								handleEvent('start-game', false, true)
							}
						>
							<Start>
								Iniciar
								<KeyboardLetter>A</KeyboardLetter>
							</Start>
							<Totem />
						</button>
					</>
				)}

				{step === 'game-intro' && (
					<Message
						messages={[
							'Durante uma de suas viagens de trabalho, o experiente arqueólogo Raul Gonçalves, encontra vestígios de uma civilização antiga, bem no coração da Floresta Amazônica, no Brasil.',
							'Ele então, decide explorar o máximo possível e vai adentrando cada vez mais nas ruínas. Apesar de ter feito isso por muitos anos, ele se esquece de uma regra básica: Ser cuidadoso!',
							'Colocando a mochila no chão, ele se aproxima de um painel com um entalhe diferente de todos os outros. Assim que fica de frente com o painel, algo acontece...',
							'Um ruído baixo... logo depois um estrondo... o chão cede sob o seus pés... e ele cai!',
						]}
						onClose={() => handleEvent('game-intro', false, true)}
					/>
				)}

				{(step === 'stage01-intro' || events[2].keepEvent) && (
					<Stage01 />
				)}
			</Content>
		</Container>
	);
};
