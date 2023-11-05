import styled from 'styled-components';

export const Conteiner = styled.div`
	position: absolute;
	padding: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 12;
	display: flex;
	align-items: flex-end;
`;

export const Sticky = styled.div`
	position: sticky;
	z-index: 12;
	left: 0;
	height: 100%;

	//background-Color: #00009955;
	//border: 1px solid white;
`;

export const Pad = styled.div`
	position: absolute;
	z-index: 12;
	bottom: 0;
	left: 0;

	opacity: 0.5;

	display: grid;
	grid-template-areas:
		'A B C'
		'D E F'
		'G H I';
`;

const divButton = styled.div`
	button {
		width: 4.8rem;
		height: 4.8rem;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}

	img {
		filter: hue-rotate(90deg);
	}
`;

export const Up = styled(divButton)`
	grid-area: B;
`;

export const Left = styled(divButton)`
	grid-area: D;
`;

export const Right = styled(divButton)`
	grid-area: F;
`;

export const Down = styled(divButton)`
	grid-area: H;
`;

export const Goals = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	background-color: rgba(0, 0, 0, 0.5);

	padding: 0.4rem 0.8rem;
	border-radius: 0.4rem;

	display: flex;
	flex-direction: column;

	> div {
		display: flex;
	}

	img {
		margin-right: 0.8rem;
		margin-top: 0.2rem;
		height: 1.6rem;
		width: 1.6rem;
	}
`;

export const Items = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;

	padding: 0.4rem 0.8rem;
	border-radius: 0.4rem;

	display: flex;

	width: 4.8rem;
	height: 100%;

	//background-color: #00009955;
`;
