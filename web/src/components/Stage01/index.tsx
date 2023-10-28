import React, { useEffect, useState } from 'react';

import { Char } from '@components/Char';

import { Conteiner, Row, TileD, TileW, TileF } from './styles';

export const Stage01 = () => {
	const [walls, setWalls] = useState([]);

	useEffect(() => {
		const wallElements = document.getElementsByClassName('tw');
		setWalls(wallElements);
		console.log('Posição x:', wallElements[27].offsetLeft);
		console.log('Posição y:', wallElements[27].offsetTop);
	}, []);

	return (
		<Conteiner>
			{/* line 1*/}
			<Row>
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
			</Row>

			{/* line 2*/}
			<Row>
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
			</Row>

			{/* line 3*/}
			<Row>
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
			</Row>

			{/* line 4*/}
			<Row>
				<TileD />
				<TileD />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD />
				<TileD />
			</Row>

			{/* line 5*/}
			<Row>
				<TileD />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD />
			</Row>

			{/* line 6*/}
			<Row>
				<TileD />
				<TileW className='tw' />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileW className='tw' />
				<TileD />
			</Row>

			{/* line 7*/}
			<Row>
				<TileD />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileD />
			</Row>

			{/* line 8*/}
			<Row>
				<TileD />
				<TileD />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileD />
				<TileD />
			</Row>

			{/* line 9*/}
			<Row>
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
			</Row>

			{/* line 10*/}
			<Row>
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileW className='tw' />
				<TileW className='tw' />
			</Row>

			{/* line 11*/}
			<Row>
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileD />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
			</Row>

			<Char />
		</Conteiner>
	);
};
