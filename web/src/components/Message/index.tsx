import { useState, useEffect, useRef } from 'react';
import {
	ButtonNext,
	WrappedMessages,
	MessageParagraph,
	Container,
	MovieBarTop,
	MovieBarBottom,
	Content,
} from './styles';

export const Message = ({
	messages,
	onClose,
}: {
	messages: string[];
	onClose: () => void;
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [textButton, setTextButton] = useState('avançar');
	const [isFinished, setIsFinished] = useState(false);

	const [displayedMessage, setDisplayedMessage] = useState('');
	const [characterIndex, setCharacterIndex] = useState(0);
	const [, setIsLoading] = useState(true);

	const [isButtonEnabled, setIsButtonEnabled] = useState(false);

	const movieBarTop = useRef<HTMLInputElement | null>(null);
	const movieBarBottom = useRef<HTMLInputElement | null>(null);
	const content = useRef<HTMLInputElement | null>(null);

	const startAnimation = () => {
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

	startAnimation();

	useEffect(() => {
		console.log('opa');
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
			}, 20);

			return () => {
				clearTimeout(timeoutId);
			};
		} else {
			setIsButtonEnabled(true);
		}
	}, [characterIndex, currentIndex, messages]);

	const handleMessage = () => {
		if (messages.length - 1 === currentIndex) {
			return finishAnimation();
		}

		if (currentIndex < messages.length - 1) {
			setCurrentIndex(currentIndex + 1);
			setDisplayedMessage('');
			setCharacterIndex(0);
		}
	};

	return (
		<Container>
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
					</ButtonNext>
				</WrappedMessages>
			</Content>
			<MovieBarBottom ref={movieBarBottom} />
		</Container>
	);
};
