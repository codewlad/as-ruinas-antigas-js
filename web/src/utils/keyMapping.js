export const HandleKeyPress = (step, key) => {
	let id, keepEvent, changeStep;

	const nullReturn = () => {
		id = '';
		keepEvent = false;
		changeStep = false;
		return { id, keepEvent, changeStep };
	};

	const directionReturn = () => {
		id = key;
		keepEvent = false;
		changeStep = true;
		return { id, keepEvent, changeStep };
	};

	switch (key) {
		case 'a':
			if (step === 'start-game') {
				id = step;
				keepEvent = false;
				changeStep = true;
				return { id, keepEvent, changeStep };
			} else {
				return nullReturn();
			}

		case 'ArrowRight':
			return directionReturn();

		case 'ArrowLeft':
			return directionReturn();

		case 'ArrowDown':
			return directionReturn();

		case 'ArrowUp':
			return directionReturn();

		default:
			return nullReturn();
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
