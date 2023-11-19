export const HandleKeyPress = (step, key) => {
	let id, keepEvent, changeStep;

	switch (key) {
		case 'a':
			if (step === 'start-game') {
				id = step;
				keepEvent = false;
				changeStep = true;
				return { id, keepEvent, changeStep };
			}
			break;
		default:
			return { id, changeStep };
	}
	/*
	let id, isActive, message;
	if (!step) {
		id = 'start-game';
		changeStep = true;
		return { id, isActive, message };
	} else {
		return null;
	}
	*/
};
