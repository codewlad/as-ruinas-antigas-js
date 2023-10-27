import styled from 'styled-components';

import tileDivision from '@assets/division-0.png';
import tileWall from '@assets/wall-0.png';
import tileFloor from '@assets/floor-0.png';

export const Conteiner = styled.div`
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