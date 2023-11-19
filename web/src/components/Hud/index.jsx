import React, { useState } from 'react';

import { usePositions } from '../../providers/positions';

import { Conteiner, Sticky, Pad, Up, Left, Right, Down, Items } from './styles';

import imgUp from '../../assets/arrow-up.svg';
import imgLeft from '../../assets/arrow-left.svg';
import imgRight from '../../assets/arrow-right.svg';
import imgDown from '../../assets/arrow-down.svg';
import imgStarBold from '../../assets/star-bold.svg';

export const Hud = () => {
	const { mainScreenWidth } = usePositions();

	return (
		<Conteiner>
			<Sticky style={{ width: `${mainScreenWidth}px` }}>
				<Pad>
					<Up>
						<button>
							<img
								src={imgUp}
								alt='Seta para cima'
							/>
						</button>
					</Up>
					<Left>
						<button>
							<img
								src={imgLeft}
								alt='Seta para cima'
							/>
						</button>
					</Left>
					<Right>
						<button>
							<img
								src={imgRight}
								alt='Seta para cima'
							/>
						</button>
					</Right>
					<Down>
						<button>
							<img
								src={imgDown}
								alt='Seta para cima'
							/>
						</button>
					</Down>
				</Pad>

				<Items>
					<button>A</button>
				</Items>
			</Sticky>
		</Conteiner>
	);
};
