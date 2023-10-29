import styled from 'styled-components';

import tileDivision from '@assets/division-0.png';
import tileWall from '@assets/wall-0.png';
import tileFloor from '@assets/floor-0.png';

export const Conteiner = styled.div`
    position: relative;
    //border: 1px solid blue;
    display: flex;
    flex-direction: column;
`

export const Row = styled.div`
    //border: 1px solid white;
    display: flex;
`

export const TileD = styled.div`
    //border: 1px solid red;
    min-width: 48px;
    min-height: 48px;
    background: black url(${tileDivision}) no-repeat center;
    background-size: cover;
`

export const TileW = styled.div`
    //border: 1px solid yellow;
    min-width: 48px;
    min-height: 48px;
    background: black url(${tileWall}) no-repeat center;
    background-size: cover;
`

export const TileF = styled.div`
    //border: 1px solid yellow;
    min-width: 48px;
    min-height: 48px;
    background: black url(${tileFloor}) no-repeat center;
    background-size: cover;
`

export const Torch = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    background: rgb(0,0,0);
    background: radial-gradient(circle at 30% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%);
    //transition: all 10ms;
`