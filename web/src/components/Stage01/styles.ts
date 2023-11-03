import styled from 'styled-components';

import tileDivision from '@assets/division-0.png';
import tileWall from '@assets/wall-0.png';
import tileFloor from '@assets/floor-0.png';

export const Conteiner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    filter: brightness(0);

    /* Animations */

    @keyframes fade-in {
        0% {
            filter: brightness(0);
        }

        100% {
            filter: brightness(100%);
        }
    }

    @keyframes moveRightLeft {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(10px);
        }
        100% {
            transform: translateX(0px);
        }
    }
`

export const Row = styled.div`
    border: none;
    display: flex;
    background: gray;
`

export const TileD = styled.div`
    min-width: 48px;
    min-height: 48px;
    background: gray url(${tileDivision}) center;
    background-size: cover;
`

export const TileW = styled.div`
    min-width: 48px;
    min-height: 48px;
    background: gray url(${tileWall}) center;
    background-size: cover;
`

export const TileF = styled.div`
    border: none;
    min-width: 48px;
    min-height: 48px;
    background: gray url(${tileFloor}) center;
    background-size: cover;
`

export const Torch = styled.div`
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;

    @media (max-width: 360px) {
        height: calc(100% + 2px)
    }
`