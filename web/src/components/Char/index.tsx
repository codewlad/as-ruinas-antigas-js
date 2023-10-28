import { useRef } from 'react';

import { Character } from './styles';

export const Char = () => {
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
			}

			frameIndexRef.current++;

			if (frameIndexRef.current === frameCount) {
				if (animationIntervalRef.current !== null) {
					clearInterval(animationIntervalRef.current);
					animationIntervalRef.current = null;
				}
			}
		}, interval);
	};

	document.addEventListener('keydown', function (event) {
		if (event.key === 'ArrowRight') {
			moveCharacter(animationFramesRight, 12, 0);
		} else if (event.key === 'ArrowLeft') {
			moveCharacter(animationFramesLeft, -12, 0);
		} else if (event.key === 'ArrowUp') {
			moveCharacter(animationFramesUp, 0, -12);
		} else if (event.key === 'ArrowDown') {
			moveCharacter(animationFramesDown, 0, 12);
		}
	});

	return <Character ref={characterRef} />;
};
