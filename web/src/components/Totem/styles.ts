import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 36rem;
    height: 36rem;
    cursor: pointer;
    //background-color: black;

    &:hover .layer-01 {
        transform: translateX(60px);
        transition: transform 0.5s ease-in-out 0.5s;
    }

    &:not(:hover) .layer-01 {
        transition: transform 0.5s ease-in-out;
    }

    &:hover .layer-02 {
        transform: translateX(-60px);
        transition: transform 0.5s ease-in-out 0.5s;
    }

    &:not(:hover) .layer-02 {
        transition: transform 0.5s ease-in-out;
    }

    &:hover .layer-04 {
        transform: rotate(90deg);
        opacity: 0;
        transition: transform 0.5s ease-in-out, opacity 0s ease-in-out 0.5s;
    }

    &:not(:hover) .layer-04 {
        transition: transform 0.5s ease-in-out 0.5s, opacity 0s ease-in-out 0.5s;
        opacity: 1;
    }

    &:hover .eyes {
        color: red;
        background-color: rgba(255,0,0,0.3);
        box-shadow: 0 0 1rem 0.25rem red, 0 0 4rem 2rem red, inset 0 0 0.75rem 0.25rem rgba(255,0,0,0.7);
    }
`

export const Image = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
`

export const Layer04 = styled(Image)`
    //border: 1px solid red;
    top: 252px;
    left: 152px;

    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    transform: rotate(0);
    opacity: 1;
`

export const Layer03 = styled(Image)`
`

export const Layer02 = styled(Image)`
    transition: transform 0.5s ease-in-out;
    transform: translateX(0);
`

export const Layer01 = styled(Image)`
    transition: transform 0.5s ease-in-out;
    transform: translateX(0);
`

export const Eyes = styled.div`
    //border: 1px solid white;
    position: absolute;
    top: 132px;
    left: 150px;
    display: flex;
    justify-content: space-between;
    gap: 49px;

    div {        
        width: 5px;
        height: 5px;
        background-color: #07150a;
        border-radius: 50%;
        transition: all 0.5s ease-in-out 0.25s;
    }
`