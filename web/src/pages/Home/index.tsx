import { useState, useRef, useEffect } from 'react';

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

	const closeMessage = (
		setStateFunction: React.Dispatch<React.SetStateAction<boolean>>,
		step: string
	) => {
		setStateFunction(false);
		setStep(step);
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

				{stage01 && <Stage01 />}
			</Content>
		</Container>
	);
}
