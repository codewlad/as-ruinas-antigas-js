import { useState, useRef, useEffect } from 'react';

import { CharacterPosition } from '../../utils/characterPosition';
import { HandleKeyPress } from '../../utils/keyMapping';

import { Message } from '../../components/Message';

import { Container, Content, Start, KeyboardLetter } from './styles';
import { Stage01 } from '../../components/Stage01';
import { Totem } from '../../components/Totem';

export function Home() {
	const [step, setStep] = useState('initial home');

	const [mainScreenWidth, setMainScreenWidth] = useState(
		0
	);

	const [startedGame, setStartedGame] = useState(false);
	const [intro, setIntro] = useState(false);
	const [stage01, setStage01] = useState(false);

	const content = useRef(null);

	const closeMessage = (setStateFunction, step) => {
		setStateFunction(false);
		setStep(step);
	};

	const handleResize = () => {
		setMainScreenWidth(content.current.offsetWidth);
		const scrollLeft =
			Math.ceil(
				(CharacterPosition.posX - content.current.offsetWidth / 2) / 48
			) * 48;

		if (scrollLeft > 0) {
			content.current.scrollLeft = scrollLeft;
		} else {
			content.current.scrollLeft = 0;
		}
	};

	const handleKeyPress = (event) => {
		const key = event.key;
		const id = 'home';
		const keyPressReturn = HandleKeyPress({ key, id });

		if (keyPressReturn && step === 'initial home') {
			setStep('intro');
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, [handleKeyPress]);

	useEffect(() => {
		console.log('STEP -> ', step);

		switch (step) {
			case 'initial home':
				break;
			case 'intro':
				setStartedGame(true);
				setIntro(true);
				break;
			case 'stage01':
				if (content.current) {
					content.current.style.alignItems = 'flex-start';
				}
				setStage01(true);
				break;
			default:
				break;
		}
	}, [step]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		handleResize();
	}, []);

	useEffect(() => {
		document.addEventListener('keydown', function (event) {
			var teclasBloqueadas = [
				'ArrowUp',
				'ArrowDown',
				'ArrowLeft',
				'ArrowRight',
			];

			if (teclasBloqueadas.includes(event.key)) {
				event.preventDefault();
			}
		});

		content.current.addEventListener('touchmove', function (event) {
			event.preventDefault();
		});

		document.addEventListener('contextmenu', function (event) {
			event.preventDefault();
		});

		document.addEventListener('touchstart', function (event) {
			event.preventDefault();
		});
	}, []);

	return (
		<Container>
			<h1>As Ruínas Antigas</h1>

			<Content ref={content}>
				{!startedGame && (
					<>
						<button
							id='buttonStartGame'
							onClick={() => setStep('intro')}
						>
							<Start>
								Iniciar
								<KeyboardLetter>A</KeyboardLetter>
							</Start>
							<Totem />
						</button>
					</>
				)}

				{intro && (
					<Message
						messages={[
							'Durante uma de suas viagens de trabalho, o experiente arqueólogo Raul Gonçalves, encontra vestígios de uma civilização antiga, bem no coração da Floresta Amazônica, no Brasil.',
							'Ele então, decide explorar o máximo possível e vai adentrando cada vez mais nas ruínas. Apesar de ter feito isso por muitos anos, ele se esquece de uma regra básica: Ser cuidadoso!',
							'Colocando a mochila no chão, ele se aproxima de um painel com um entalhe diferente de todos os outros. Assim que fica de frente com o painel, algo acontece...',
							'Um ruído baixo... logo depois um estrondo... o chão cede sob o seus pés... e ele cai!',
						]}
						onClose={() => closeMessage(setIntro, 'stage01')}
						mainScreenWidth={mainScreenWidth}
					/>
				)}

				{stage01 && (
					<Stage01
						content={content}
						mainScreenWidth={mainScreenWidth}
					/>
				)}
			</Content>
		</Container>
	);
}
