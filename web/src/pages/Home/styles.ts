import styled from 'styled-components';

import bg from '@assets/bg.webp';

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.4rem;
`

export const Content = styled.div`
    max-width: 768px; // 48*16
    height: 528px;    // 48*11
    width: 100%;

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

    background: black url(${bg}) no-repeat center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
`

export const Intro = styled.div`
    //border: 1px solid red;

    display: grid;
    flex: 1;
    width: 100%;
    grid-template-rows: min-content auto min-content;

    > div:nth-child(1) {
        background-color: black;
        animation: film-bar 1000ms forwards;
        height: 0rem;
    }

    > div:nth-child(2) {
        background-color: rgba(0,0,0,0);
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 4rem;

        font-size: 2.4rem;

        animation: darken 1000ms forwards;

        @media (max-width: 460px) {
            padding: 2rem;
            font-size: 2rem;
        }
    }

    > div:nth-child(3) {
        background-color: black;
        animation: film-bar 1000ms forwards;
        height: 0rem;
    }

    @keyframes film-bar {
        0% {
            height: 0rem;
        }

        100% {
            height: 10rem;
        }
    }

    @keyframes darken {
        0% {
            background-color: rgba(0,0,0,0);
        }

        100% {
            background-color: rgba(0,0,0,0.8);
        }
    }
`