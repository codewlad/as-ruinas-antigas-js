export const HandleKeyPress = (step, key) => {
	let id, isActive, message, changeStep;

	switch (key) {
		case 'a':
			if (step === 'start-game') {
				id = step;
				isActive = false;
				message = false;
				changeStep = true;
				return { id, isActive, message, changeStep };
			}
			break;
		default:
			break;
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
