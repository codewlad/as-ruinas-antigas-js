import { useState, useRef } from 'react';

import { Message } from '@components/Message';

import { Container, Content, Intro } from './styles';

export function Home() {
	const [startedGame, setStartedGame] = useState<boolean>(false);

	const content = useRef<HTMLDivElement>(null);
	const buttonStartGame = useRef<HTMLButtonElement>(null);
	const divMessage = useRef<HTMLDivElement>(null);

	const handleStartGame = () => {
		buttonStartGame.current?.classList.add('hide');

		const startGame = setInterval(() => {
			setStartedGame(true);

			clearInterval(startGame);
		}, 200);
	};

	return (
		<Container>
			<h1>As Ruínas Antigas</h1>

			<Content ref={content}>
				{!startedGame && (
					<button
						id='buttonStartGame'
						ref={buttonStartGame}
						onClick={handleStartGame}
					>
						Iniciar
					</button>
				)}

				{startedGame && (
					<Intro>
						<div></div>
						<div ref={divMessage}>
							<Message
								messages={[
									'Durante uma de suas viagens de trabalho, o experiente arqueólogo Raul Gonçalves, encontra vestígios de uma civilização antiga, bem no coração da Floresta Amazônica, no Brasil.',
									'Ele então, decide explorar o máximo possível e vai adentrando cada vez mais nas ruínas. Apesar de ter feito isso por muitos anos, ele se esquece de uma regra básica: Ser cuidadoso!',
									'Colocando a mochila no chão, ele se aproxima de um painel com um entalhe diferente de todos os outros. Assim que fica de frente com o painel, algo acontece...',
									'Um ruído baixo... logo depois um estrondo... o chão cede sob o seus pés... e ele cai!',
								]}
							/>
						</div>
						<div></div>
					</Intro>
				)}
			</Content>
		</Container>
	);
}
