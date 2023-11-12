type BloquedTilesProps = {
	posX: number;
	posY: number;
};

export let BloquedTiles: BloquedTilesProps[] = [];

export const GetBloquedTiles = () => {
	BloquedTiles = [];
	const wallElements = document.getElementsByClassName('tw');
	const divisionElements = document.getElementsByClassName('td');
	const itemElements = document.getElementsByClassName('item');
	const AllBloquedElements = [
		...wallElements,
		...divisionElements,
		...itemElements,
	];

	for (var i = 0; i < AllBloquedElements.length; i++) {
		const element = AllBloquedElements[i] as HTMLElement;

		const offsetLeft = element.offsetLeft;
		const offsetTop = element.offsetTop;

		const tile = {
			posX: offsetLeft,
			posY: offsetTop,
		};

		BloquedTiles.push(tile);
	}
};
