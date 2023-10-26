import { useState, useEffect } from 'react';
import { ButtonNext, Container, MessageParagraph } from './styles';

export const Message = ({ messages }: { messages: string[] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [textButton, setTextButton] = useState('avançar');
	const [isFinished, setIsFinished] = useState(false);

	const [displayedMessage, setDisplayedMessage] = useState('');
	const [characterIndex, setCharacterIndex] = useState(0);
	const [, setIsLoading] = useState(true);

	const [isButtonEnabled, setIsButtonEnabled] = useState(false);

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
			}, 20);

			return () => {
				clearTimeout(timeoutId);
			};
		} else {
			setIsButtonEnabled(true);
		}
	}, [characterIndex, currentIndex, messages]);

	const handleNextMessage = () => {
		if (currentIndex < messages.length - 1) {
			setCurrentIndex(currentIndex + 1);
			setDisplayedMessage('');
			setCharacterIndex(0);
		} else {
			setTextButton('fechar');
		}
	};

	return (
		<Container>
			<MessageParagraph id='divMessage'>
				{displayedMessage}
			</MessageParagraph>
			<ButtonNext
				onClick={handleNextMessage}
				disabled={!isButtonEnabled}
			>
				{textButton}
			</ButtonNext>
		</Container>
	);
};
