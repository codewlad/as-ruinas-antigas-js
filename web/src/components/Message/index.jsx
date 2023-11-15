import { useState, useEffect, useRef, useCallback } from 'react';
import {
	ButtonNext,
	WrappedMessages,
	MessageParagraph,
	Conteiner,
	Sticky,
	MessageConteiner,
	MovieBarTop,
	MovieBarBottom,
	Content,
	KeyboardLetter,
} from './styles';

import { HandleMovementStatus } from '../../utils/characterMovement';
import { HandleKeyPress } from '../../utils/keyMapping';

export const Message = ({
	messages,
	onClose,
	mainScreenWidth,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [textButton, setTextButton] = useState('avançar');
	const [isFinished, setIsFinished] = useState(false);

	const [displayedMessage, setDisplayedMessage] = useState('');
	const [characterIndex, setCharacterIndex] = useState(0);
	const [, setIsLoading] = useState(true);

	const [isButtonEnabled, setIsButtonEnabled] = useState(false);

	const movieBarTop = useRef(null);
	const movieBarBottom = useRef(null);
	const content = useRef(null);

	const startAnimation = () => {
		HandleMovementStatus(false);
		if (movieBarTop.current && movieBarBottom.current && content.current) {
			movieBarTop.current.classList.add('movie-bar');
			movieBarBottom.current.classList.add('movie-bar');
			content.current.classList.add('bc-opacity-black-80', 'show');
		}
	};

	const finishAnimation = () => {
		if (movieBarTop.current && movieBarBottom.current && content.current) {
			movieBarTop.current.classList.remove('movie-bar');
			movieBarBottom.current.classList.remove('movie-bar');
			content.current.classList.remove('bc-opacity-black-80', 'show');
		}
		const awaitBeforeClose = setInterval(() => {
			onClose();
			clearInterval(awaitBeforeClose);
		}, 1000);
	};

	const handleMessage = useCallback(() => {
		if (messages.length - 1 === currentIndex) {
			return finishAnimation();
		}

		if (currentIndex < messages.length - 1) {
			setCurrentIndex(currentIndex + 1);
			setDisplayedMessage('');
			setCharacterIndex(0);
		}
	}, [currentIndex, messages, finishAnimation]);

	const handleKeyPress = (event) => {
		if (!isButtonEnabled) return;

		const key = event.key;
		const id = 'message';
		const keyPressReturn = HandleKeyPress({ key, id });

		if (keyPressReturn) {
			handleMessage();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, [handleKeyPress]);

	startAnimation();

	useEffect(() => {
		setIsLoading(false);
	}, []);

	useEffect(() => {
		if (!isFinished) {
			if (messages.length - 1 === currentIndex) {
				const intervalMessageButton = setInterval(() => {
					setTextButton('fechar');
					clearInterval(intervalMessageButton);
				}, 200);

				setIsFinished(true);
			}
		}
	}, [currentIndex, isFinished, messages]);

	useEffect(() => {
		const message = messages[currentIndex];
		if (characterIndex < message.length) {
			setIsButtonEnabled(false);
			const timeoutId = setTimeout(() => {
				setDisplayedMessage(message.slice(0, characterIndex + 1));
				setCharacterIndex(characterIndex + 1);
			}, 0); /* Message speed. Waiting time (millseconds) between each character. */

			return () => {
				clearTimeout(timeoutId);
			};
		} else {
			setIsButtonEnabled(true);
		}
	}, [characterIndex, currentIndex, messages]);

	return (
		<Conteiner>
			<Sticky>
				<MessageConteiner
					style={{
						width: `${mainScreenWidth}px`,
					}}
				>
					<MovieBarTop ref={movieBarTop} />
					<Content ref={content}>
						<WrappedMessages>
							<MessageParagraph id='divMessage'>
								{displayedMessage}
							</MessageParagraph>
							<ButtonNext
								onClick={handleMessage}
								disabled={!isButtonEnabled}
							>
								{textButton}
								<KeyboardLetter>A</KeyboardLetter>
							</ButtonNext>
						</WrappedMessages>
					</Content>
					<MovieBarBottom ref={movieBarBottom} />
				</MessageConteiner>
			</Sticky>
		</Conteiner>
	);
};
