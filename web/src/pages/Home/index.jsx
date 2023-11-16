import { useEvents } from '../../providers/events';

import { Totem } from '../../components/Totem';

import { Container, Content, Start, KeyboardLetter } from './styles';

export const Home = () => {
	const { events, handleEvent } = useEvents();

	return (
		<Container>
			<h1>As Ruínas Antigas</h1>

			<Content>
				<button
					id='buttonStartGame'
					onClick={() => handleEvent('start-game')}
				>
					<Start>
						Iniciar
						<KeyboardLetter>A</KeyboardLetter>
					</Start>
					<Totem />
				</button>

				{/*
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
				*/}

				{/*
					<Stage01
						content={content}
						mainScreenWidth={mainScreenWidth}
					/>
				*/}
			</Content>
		</Container>
	);
};
