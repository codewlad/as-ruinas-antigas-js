import styled from 'styled-components';

import char01 from '../../assets/char-01.png';

export const Character = styled.div`
	min-width: 48px;
	min-height: 48px;
	background-image: url(${char01});
	background-size: 144px 192px;
	background-position: 96px 0px;
	position: absolute;
	z-index: 10;
`;
