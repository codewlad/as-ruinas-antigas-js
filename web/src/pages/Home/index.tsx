import { useState, useRef, useEffect } from 'react';

import { CharacterPosition } from '../../utils/characterPosition';

import { Message } from '@components/Message';

import { Container, Content } from './styles';
import { Stage01 } from '@components/Stage01';
import { Totem } from '@components/Totem';

export function Home() {
	const [step, setStep] = useState<string>('initial');

	const [startedGame, setStartedGame] = useState<boolean>(false);
	const [intro, setIntro] = useState<boolean>(false);
	const [stage01, setStage01] = useState<boolean>(false);

	//const buttonStartGame = useRef<HTMLButtonElement>(null);
	const content = useRef<HTMLDivElement>(null);

	const closeMessage = (
		setStateFunction: React.Dispatch<React.SetStateAction<boolean>>,
		step: string
	) => {
		setStateFunction(false);
		setStep(step);
	};

	const handleResize = () => {
		const scrollLeft =
			Math.ceil(
				(CharacterPosition.posX - content.current!.offsetWidth / 2) / 48
			) * 48;

		if (scrollLeft > 0) {
			content.current!.scrollLeft = scrollLeft;
		} else {
			content.current!.scrollLeft = 0;
		}
	};

	useEffect(() => {
		switch (step) {
			case 'initial':
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

		content.current!.addEventListener('touchmove', function (event) {
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
							<span>Iniciar</span>
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
					/>
				)}

				{stage01 && <Stage01 content={content} />}
			</Content>
		</Container>
	);
}
