import { useState, useRef, useEffect } from 'react';

import { Message } from '@components/Message';

import { Container, Content } from './styles';

export function Home() {
	const [startedGame, setStartedGame] = useState<boolean>(false);
	const [intro, setIntro] = useState<boolean>(false);
	const [getItemX, setGetItemX] = useState<boolean>(false);
	const [getItemY, setGetItemY] = useState<boolean>(false);

	const buttonStartGame = useRef<HTMLButtonElement>(null);

	const closeMessage = (
		setStateFunction: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		setStateFunction(false);
	};

	useEffect(() => {
		if (startedGame) {
			setIntro(true);
		}
	}, [startedGame]);

	return (
		<Container>
			<h1>As Ruínas Antigas</h1>

			<Content>
				{!startedGame && (
					<button
						id='buttonStartGame'
						ref={buttonStartGame}
						onClick={() => setStartedGame(true)}
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
						onClose={() => closeMessage(setIntro)}
					/>
				)}

				{getItemX && (
					<Message
						messages={['Pegou um item: mensagem 1']}
						onClose={() => closeMessage(setGetItemX)}
					/>
				)}

				{getItemY && (
					<Message
						messages={[
							'Pegou um item: mensagem 1',
							'Pegou um item: mensagem 2',
							'Pegou um item: mensagem 3',
						]}
						onClose={() => closeMessage(setGetItemY)}
					/>
				)}

				<button onClick={() => setGetItemX(true)}>get item X</button>
				<button onClick={() => setGetItemY(true)}>get item Y</button>
			</Content>
		</Container>
	);
}
