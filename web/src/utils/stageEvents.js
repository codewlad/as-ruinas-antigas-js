import { CharacterPosition } from './characterPosition';

export let StageEvents = [];

export const GetStageEvents = () => {
	StageEvents = [];
	const stageEvents = document.getElementsByClassName('item');

	for (var i = 0; i < stageEvents.length; i++) {
		const element = stageEvents[i];

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

export const CheckStageEvent = (x, y) => {
	const eventExists = StageEvents.find(
		(item) =>
			item.posX === CharacterPosition.posX + x &&
			item.posY === CharacterPosition.posY + y
	);

	return eventExists?.eventName;
};

export const RemoveEvent = (eventID) => {
	const eventDiv = document.getElementById(eventID);
	eventDiv?.remove();
};
