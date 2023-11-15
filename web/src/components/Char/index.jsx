import { useRef, useEffect } from 'react';

import { CharacterPosition } from '../../utils/characterPosition';
import { handleMovement } from '../../utils/characterMovement';
import { MovementInformation } from '../../utils/characterInfo';

import { Character } from './styles';

export const Char = ({
	updateTorchPosition,
	content,
}) => {
	let stageWidth = content.current.offsetWidth;
	let stageHeight = content.current.offsetHeight;

	const characterRef = useRef(null);

	MovementInformation.halfStageWidth = Math.floor(stageWidth / 2 / 48) * 48;
	MovementInformation.halfStageHeight = Math.floor(stageHeight / 2 / 48) * 48;
	MovementInformation.stageContent = content.current;

	document.addEventListener('keydown', function (event) {
		handleMovement(event.key, updateTorchPosition);
	});

	const handleResize = () => {
		MovementInformation.halfStageWidth =
			Math.floor(content.current.offsetWidth / 2 / 48) * 48;
		MovementInformation.halfStageHeight =
			Math.floor(content.current.offsetHeight / 2 / 48) * 48;
	};

	useEffect(() => {
		CharacterPosition.posX = 48;
		CharacterPosition.posY = 288;

		if (characterRef.current) {
			characterRef.current.style.left = `${CharacterPosition.posX}px`;
			characterRef.current.style.top = `${CharacterPosition.posY}px`;
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		MovementInformation.char = document.querySelector('#char');
	}, []);

	return (
		<Character
			ref={characterRef}
			id='char'
		/>
	);
};
