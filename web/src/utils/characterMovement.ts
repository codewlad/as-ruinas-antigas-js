import { BloquedTiles } from '../utils/bloquedTiles';
import { CharacterPosition } from '../utils/characterPosition';
import { MovementInformation } from '../utils/characterInfo';

let keydown = '';

const animationFramesDown = [2, 1, 0, 1];
const animationFramesLeft = [5, 4, 3, 4];
const animationFramesRight = [8, 7, 6, 7];
const animationFramesUp = [11, 10, 9, 10];

let frameIndex = 0;

let animationInterval = 0;

const updateSprite = (frame: number, char: HTMLDivElement | null) => {
    const frameX = (frame % 3) * 48;
        const frameY = Math.floor(frame / 3) * 48;
        char!.style.backgroundPosition = `-${frameX}px -${frameY}px`;
}

const moveCharacter = (
    animationFrames: number[],
    moveX: number,
    moveY: number,
    char: HTMLDivElement | null,
    halfStageWidth: number,
    halfStageHeight: number,
    content: any,
    updateTorchPosition: any
) => {
    
    if (animationInterval) return;

    const interval = 120;
    const frameCount = animationFrames.length;
    frameIndex = 0;

    animationInterval = setInterval(() => {
        updateSprite(animationFrames[frameIndex], char);

        
        const currentLeft = parseInt(char!.style.left);
        const currentTop = parseInt(char!.style.top);
        char!.style.left = currentLeft + moveX + 'px';
        char!.style.top = currentTop + moveY + 'px';

        updateTorchPosition(
            parseInt(char!.style.left),
            parseInt(char!.style.top)
        );

        if (keydown === 'ArrowRight') {
            CharacterPosition.posX + 48 > halfStageWidth
                ? (content!.scrollLeft += 12)
                : null;
        } else if (keydown === 'ArrowLeft') {
            CharacterPosition.posX - 48 - content.scrollLeft <
            halfStageWidth
                ? (content!.scrollLeft -= 12)
                : null;
        } else if (keydown === 'ArrowUp') {
            CharacterPosition.posY > halfStageHeight
                ? (content!.scrollTop += 12)
                : null;
        } else if (keydown === 'ArrowDown') {
            CharacterPosition.posY - content!.scrollTop <
            halfStageHeight
                ? (content!.scrollTop -= 12)
                : null;
        }

        frameIndex ++;

        if (frameIndex === frameCount) {
            if (animationInterval !== 0) {
                clearInterval(animationInterval);
                animationInterval = 0;

                CharacterPosition.posX = parseInt(char!.style.left);
                CharacterPosition.posY = parseInt(char!.style.top);                
            }
        }
    }, interval);
};

export const handleMovement = (key: string, updateTorchPosition: (newPosX: number, newPosY: number) => void) => {
    const {char, halfStageWidth, halfStageHeight, stageContent} = MovementInformation
    keydown = key;
		const isBlocked = (x: number, y: number) =>
			BloquedTiles.find(
				(item) =>
					item.posX === CharacterPosition.posX + x &&
					item.posY === CharacterPosition.posY + y
			);
		if (key === 'ArrowRight') {
			isBlocked(48, 0)
				? updateSprite(7, char)
				: moveCharacter(animationFramesRight, 12, 0, char, halfStageWidth, halfStageHeight, stageContent, updateTorchPosition);
		} else if (key === 'ArrowLeft') {
			isBlocked(-48, 0)
				? updateSprite(4, char)
				: moveCharacter(animationFramesLeft, -12, 0, char, halfStageWidth, halfStageHeight, stageContent, updateTorchPosition);
		} else if (key === 'ArrowUp') {
			isBlocked(0, -48)
				? updateSprite(10, char)
				: moveCharacter(animationFramesUp, 0, -12, char, halfStageWidth, halfStageHeight, stageContent, updateTorchPosition);
		} else if (key === 'ArrowDown') {
			isBlocked(0, 48)
				? updateSprite(1, char)
				: moveCharacter(animationFramesDown, 0, 12, char, halfStageWidth, halfStageHeight, stageContent, updateTorchPosition);
		}
}