import { CharacterPosition, CharacterFace } from './characterPosition';

import { CheckStageEvent } from './stageEvents';

export const HandleKeyPress = ({ key, id }) => {
	const eventReturn = {
		status: false,
		event: '',
	};

	switch (id) {
		case 'home':
			if (key === 'a') {
				return true;
			}
			break;

		case 'message':
			if (key === 'a') {
				return true;
			}
			break;

		case 'stage':
			if (key === 'a') {
				switch (CharacterFace.direction) {
					case 'right':
						eventReturn.event = CheckStageEvent(48, 0);
						if (eventReturn.event) {
							eventReturn.status = true;
							return eventReturn;
						} else {
							return false;
						}
					case 'left':
						eventReturn.event = CheckStageEvent(-48, 0);
						if (eventReturn.event) {
							eventReturn.status = true;
							return eventReturn;
						} else {
							return false;
						}
					case 'up':
						eventReturn.event = CheckStageEvent(0, -48);
						if (eventReturn.event) {
							eventReturn.status = true;
							return eventReturn;
						} else {
							return false;
						}
					case 'down':
						eventReturn.event = CheckStageEvent(0, 48);
						if (eventReturn.event) {
							eventReturn.status = true;
							return eventReturn;
						} else {
							return false;
						}
					default:
						break;
				}
				console.log('CHAR POS Y -> ', CharacterPosition.posY);
				console.log('CHAR POS X -> ', CharacterPosition.posX);
				console.log('DIREÇÃO -> ', CharacterFace.direction);
			}
			break;

		default:
			console.log('outro');
			break;
	}
};
