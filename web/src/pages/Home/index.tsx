import { useState, useRef, useEffect } from 'react';

import { CharacterPosition } from '../../utils/characterPosition';

import { Message } from '@components/Message';

import { Container, Content } from './styles';
import { Stage01 } from '@components/Stage01';

export function Home() {
	const [step, setStep] = useState<string>('initial');

	const [startedGame, setStartedGame] = useState<boolean>(false);
	const [intro, setIntro] = useState<boolean>(false);
	const [stage01, setStage01] = useState<boolean>(false);

	const buttonStartGame = useRef<HTMLButtonElement>(null);
	const content = useRef<HTMLDivElement>(null);

	const [contentWidth, setContentWidth] = useState(0);
	const [contentHeight, setContentHeight] = useState(0);

	const [halfContentWidth, setHalfContentWidth] = useState(0);
	const [halfContentHeight, setHalfContentHeight] = useState(0);

	const [stageWidth, setStageWidth] = useState(0);
	const [stageHeight, setStageHeight] = useState(0);

	const [charPosX, setCharPosX] = useState(0);
	const [charPosY, setCharPosY] = useState(0);

	const [keydown, setKeydown] = useState('');

	const closeMessage = (
		setStateFunction: React.Dispatch<React.SetStateAction<boolean>>,
		step: string
	) => {
		setStateFunction(false);
		setStep(step);
	};

	const handleResize = () => {
		if (content.current) {
			setContentWidth(content.current.offsetWidth);
			setContentHeight(content.current.offsetHeight);
			setHalfContentWidth(
				Math.floor(content.current.offsetWidth / 2 / 48) * 48
			);
			setHalfContentHeight(
				Math.floor(content.current.offsetHeight / 2 / 48) * 48
			);

			const scrollLeft =
				Math.ceil(
					(CharacterPosition.posX - content.current.offsetWidth / 2) /
						48
				) * 48;

			if (scrollLeft > 0) {
				content.current.scrollLeft = scrollLeft;
			} else {
				content.current.scrollLeft = 0;
			}
		}
	};

	/*
	useEffect(() => {
		if (startedGame) {
			setIntro(true);
		}
	}, [startedGame]);
	*/

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
				event.preventDefault(); // Isso impede a ação padrão da tecla
			}
		});
	}, []);

	useEffect(() => {
		if (keydown === 'ArrowRight') {
			if (charPosX > halfContentWidth) {
				content.current.scrollLeft += 48;
			}
		} else if (keydown === 'ArrowLeft') {
			if (charPosX - content.current.scrollLeft < halfContentWidth) {
				content.current.scrollLeft -= 48;
			}
		} else if (keydown === 'ArrowUp') {
			if (charPosY > halfContentHeight) {
				content.current.scrollTop += 48;
			}
		} else if (keydown === 'ArrowDown') {
			if (charPosY - content.current.scrollTop < halfContentWidth) {
				content.current.scrollTop -= 48;
			}
		}
	}, [stageWidth, stageHeight, charPosX, charPosY]);

	return (
		<Container>
			<h1>As Ruínas Antigas</h1>

			<Content ref={content}>
				{!startedGame && (
					<button
						id='buttonStartGame'
						ref={buttonStartGame}
						onClick={() => setStep('intro')}
					>
						Iniciar
					</button>
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

				{stage01 && (
					<Stage01
						setStageWidth={setStageWidth}
						setStageHeight={setStageHeight}
						setCharPosX={setCharPosX}
						setCharPosY={setCharPosY}
						setKeydown={setKeydown}
					/>
				)}
			</Content>
		</Container>
	);
}
