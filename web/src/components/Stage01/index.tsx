import { useState, useEffect, useRef } from 'react';

import { GetBloquedTiles } from '../../utils/bloquedTiles';

import { Char } from '@components/Char';
import { Gamepad } from '@components/Gamepad';

import { Conteiner, Row, TileD, TileW, TileF, Torch } from './styles';

export const Stage01 = ({
	content,
}: {
	content: React.RefObject<HTMLDivElement>;
}) => {
	const [posX, setPosX] = useState(48 + 24);
	const [posY, setPosY] = useState(288 + 24);

	const conteinerRef = useRef<HTMLDivElement | null>(null);

	const updateTorchPosition = (newPosX: number, newPosY: number) => {
		setPosX(newPosX + 24);
		setPosY(newPosY + 24);
	};

	useEffect(() => {
		GetBloquedTiles();
	}, []);

	return (
		<Conteiner ref={conteinerRef}>
			{/* line 1*/}
			<Row>
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
			</Row>

			{/* line 2*/}
			<Row>
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
			</Row>

			{/* line 3*/}
			<Row>
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
			</Row>

			{/* line 4*/}
			<Row>
				<TileD className='td' />
				<TileD className='td' />
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
				<TileD className='td' />
				<TileD className='td' />
			</Row>

			{/* line 5*/}
			<Row>
				<TileD className='td' />
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
				<TileD className='td' />
			</Row>

			{/* line 6*/}
			<Row>
				<TileD className='td' />
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
				<TileD className='td' />
			</Row>

			{/* line 7*/}
			<Row>
				<TileD className='td' />
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
				<TileD className='td' />
			</Row>

			{/* line 8*/}
			<Row>
				<TileD className='td' />
				<TileD className='td' />
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
				<TileD className='td' />
				<TileD className='td' />
			</Row>

			{/* line 9*/}
			<Row>
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
			</Row>

			{/* line 10*/}
			<Row>
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileF />
				<TileF />
				<TileF />
				<TileF />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileW className='tw' />
				<TileW className='tw' />
			</Row>

			{/* line 11*/}
			<Row>
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileD className='td' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
				<TileW className='tw' />
			</Row>

			<Char
				updateTorchPosition={updateTorchPosition}
				content={content}
			/>
			<Torch
				style={{
					background: `radial-gradient(circle at ${posX}px ${posY}px, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 200px)`,
				}}
			/>

			<Gamepad updateTorchPosition={updateTorchPosition} />
		</Conteiner>
	);
};
