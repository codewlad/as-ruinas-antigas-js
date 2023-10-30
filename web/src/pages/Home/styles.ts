import styled from 'styled-components';

import bg from '@assets/bg.webp';

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.4rem;

    ::-webkit-scrollbar {
        width: 0rem;
        height: 0rem;
    }
`

export const Content = styled.div`
    position: relative;
    max-width: 770px; // 48*16+2
    height: 530px;    // 48*11+2
    width: 100%;

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

    background: black url(${bg}) no-repeat center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    overflow: auto;

    scroll-behavior: smooth;
`