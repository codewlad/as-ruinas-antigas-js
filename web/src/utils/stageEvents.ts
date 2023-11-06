import { CharacterPosition } from '../utils/characterPosition';

type EventsProps = {
	posX: number;
	posY: number;
	eventName: string;
};

export const StageEvents: EventsProps[] = [];

export const GetStageEvents = () => {
	const stageEvents = document.getElementsByClassName('item');

	for (var i = 0; i < stageEvents.length; i++) {
		const element = stageEvents[i] as HTMLElement;

		const offsetLeft = element.offsetLeft;
		const offsetTop = element.offsetTop;
		const eventName = element.id;

		const tile = {
			posX: offsetLeft,
			posY: offsetTop,
			eventName,
		};

		StageEvents.push(tile);
	}
};

export const CheckStageEvent = (x: number, y: number) => {
	const eventExists = StageEvents.find(
		(item) =>
			item.posX === CharacterPosition.posX + x &&
			item.posY === CharacterPosition.posY + y
	);

	return eventExists?.eventName;
};
