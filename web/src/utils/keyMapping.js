export const HandleKeyPress = (step, key) => {
	let id, changeStep;
	if (!step) {
		id = 'start-game';
		changeStep = true;
		return { id, changeStep };
	} else {
		return null;
	}
};
