type BloquedTilesProps = {
	posX: number;
	posY: number;
}

export const BloquedTiles: BloquedTilesProps[] = [];

export const GetBloquedTiles = () => {

	const wallElements = document.getElementsByClassName('tw')
	const divisionElements = document.getElementsByClassName('td');
	const AllBloquedElements = [...wallElements, ...divisionElements]

	for (var i = 0; i < AllBloquedElements.length; i++) {
		const element = AllBloquedElements[i] as HTMLElement;
	  
		const offsetLeft = element.offsetLeft;
		const offsetTop = element.offsetTop;
	  
		const tile = {
		  posX: offsetLeft,
		  posY: offsetTop
		};
	  
		BloquedTiles.push(tile);
	}
}