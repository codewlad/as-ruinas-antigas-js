import { useRef, useEffect } from 'react';

import { CharacterPosition } from '../../utils/characterPosition';
import { BloquedTiles } from '../../utils/bloquedTiles';

import { Character } from './styles';

export const Char = ({
	updateTorchPosition,
	updateCharPosition,
	getKeyDown,
}) => {
	const characterRef = useRef<HTMLDivElement | null>(null);

	const animationFramesDown = [2, 1, 0, 1];
	const animationFramesLeft = [5, 4, 3, 4];
	const animationFramesRight = [8, 7, 6, 7];
	const animationFramesUp = [11, 10, 9, 10];
	const frameIndexRef = useRef(0);
	const animationIntervalRef = useRef<number | null>(null);

	const updateSprite = (frame: number) => {
		if (characterRef.current) {
			const frameX = (frame % 3) * 48;
			const frameY = Math.floor(frame / 3) * 48;
			characterRef.current.style.backgroundPosition = `-${frameX}px -${frameY}px`;
		}
	};

	const moveCharacter = (
		animationFrames: number[],
		moveX: number,
		moveY: number
	) => {
		if (animationIntervalRef.current) return;

		const interval = 120;
		const frameCount = animationFrames.length;
		frameIndexRef.current = 0;

		animationIntervalRef.current = setInterval(() => {
			updateSprite(animationFrames[frameIndexRef.current]);

			if (characterRef.current) {
				const currentLeft =
					parseInt(characterRef.current.style.left) || 0;
				const currentTop =
					parseInt(characterRef.current.style.top) || 0;
				characterRef.current.style.left = currentLeft + moveX + 'px';
				characterRef.current.style.top = currentTop + moveY + 'px';

				updateTorchPosition(
					parseInt(characterRef.current.style.left),
					parseInt(characterRef.current.style.top)
				);
			}

			frameIndexRef.current++;

			if (frameIndexRef.current === frameCount) {
				if (animationIntervalRef.current !== null) {
					clearInterval(animationIntervalRef.current);
					animationIntervalRef.current = null;

					if (characterRef.current) {
						CharacterPosition.posX = parseInt(
							characterRef.current.style.left
						);
						CharacterPosition.posY = parseInt(
							characterRef.current.style.top
						);

						updateCharPosition(
							parseInt(characterRef.current.style.left),
							parseInt(characterRef.current.style.top)
						);
					}
				}
			}
		}, interval);
	};

	document.addEventListener('keydown', function (event) {
		getKeyDown(event.key);
		const isBlocked = (x: number, y: number) =>
			BloquedTiles.find(
				(item) =>
					item.posX === CharacterPosition.posX + x &&
					item.posY === CharacterPosition.posY + y
			);
		if (event.key === 'ArrowRight') {
			isBlocked(48, 0)
				? moveCharacter(animationFramesRight, 0, 0)
				: moveCharacter(animationFramesRight, 12, 0);
		} else if (event.key === 'ArrowLeft') {
			isBlocked(-48, 0)
				? moveCharacter(animationFramesLeft, 0, 0)
				: moveCharacter(animationFramesLeft, -12, 0);
		} else if (event.key === 'ArrowUp') {
			isBlocked(0, -48)
				? moveCharacter(animationFramesUp, 0, 0)
				: moveCharacter(animationFramesUp, 0, -12);
		} else if (event.key === 'ArrowDown') {
			isBlocked(0, 48)
				? moveCharacter(animationFramesDown, 0, 0)
				: moveCharacter(animationFramesDown, 0, 12);
		}
	});

	useEffect(() => {
		if (characterRef.current) {
			characterRef.current.style.left = '48px';
			characterRef.current.style.top = '288px';
		}
		CharacterPosition.posX = 48;
		CharacterPosition.posY = 288;
	}, []);

	return <Character ref={characterRef} />;
};
