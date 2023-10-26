import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Indie Flower', cursive;
        
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.WHITE};
        padding: 2rem;
        min-width: 360px;
    }

    h1 {
        font-size: 4rem;
    }

    .hide {
        opacity: 0;
    }

    .show {
        opacity: 1;
    }

    button {
        position: relative;
        font-size: 1.8rem;
        font-family: 'Indie Flower', cursive;
        font-weight: bold;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: rgba(0,0,0,0.8);

        border-radius: 0.4rem;
        border: 1px solid ${({ theme }) => theme.COLORS.DEFAULT};
        padding: 1.2rem 2.4rem;

        cursor: pointer;
        transition: all 200ms;

        &:hover {
            background-color: rgba(0,0,0,0.9);
        }

        &:active {
            background-color: rgba(0,0,0,1);
        }
    }

    ::-webkit-scrollbar {
        width: 1rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 0.5rem;
    }

    * {
        scrollbar-color: ${({ theme }) => theme.COLORS.WHITE} transparent;
    }

    *::-moz-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 0.5rem;
    }

    ::-ms-scrollbar {
        width: 0.5rem;
    }

    ::-ms-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 0.5rem;
    }
`