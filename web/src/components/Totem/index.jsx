import { Container, Eyes, Layer01, Layer02, Layer03, Layer04 } from './styles';

import totem01 from '../../assets/totem-01.png';
import totem02 from '../../assets/totem-02.png';
import totem03 from '../../assets/totem-03.png';
import totem04 from '../../assets/totem-04.png';

export const Totem = () => {
	return (
		<Container>
			<Layer01
				src={totem01}
				className='layer-01'
			/>
			<Layer02
				src={totem02}
				className='layer-02'
			/>
			<Layer03 src={totem03} />
			<Layer04
				src={totem04}
				className='layer-04'
			/>
			<Eyes>
				<div className='eyes'></div>
				<div className='eyes'></div>
			</Eyes>
		</Container>
	);
};
