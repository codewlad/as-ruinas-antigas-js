import styled from 'styled-components';

export const Conteiner = styled.div`
    position: absolute;
    z-index: 12;
    bottom: 1.2rem;
    left: 1.2rem;

    opacity: 0.5;

    display: grid;
    grid-template-areas:
    "A B C"
    "D E F"
    "G H I";
`

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
        filter: hue-rotate(90deg)
    }
`

export const Up = styled(divButton)`
    grid-area: B;
`

export const Left = styled(divButton)`
    grid-area: D;
`

export const Right = styled(divButton)`
    grid-area: F;
`

export const Down = styled(divButton)`
    grid-area: H;
`