import styled from 'styled-components';

export const Conteiner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-Index: 12;
    display: flex;
`

export const Sticky = styled.div`
    position: sticky;
    z-Index: 12;
    top: 0;
    left: 0;
    width: 100%;
`

export const MessageConteiner = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    display: grid;
    height: 100%;
    grid-template-rows: min-content auto min-content;

    .movie-bar {
        height: 10rem;
        transition: all 1s;

        animation: top-down 1s;

        @keyframes top-down {
            0% {
                height: 0;
            }

            100% {
                height: 10rem;
            }
        }
    }

    .bc-opacity-black-80 {
        background-color: rgba(50,50,50,0.8);
    }

    .show {
        opacity: 1;
    }

    .hide-1s {
        animation: hide-1s 1s forwards;

        @keyframes hide-1s {
            100% {
                opacity: 0;
                display: none;
            }
        }
    }

    .show-1s {
        animation: show-1s 1s forwards;

        @keyframes show-1s {
            100% {
                opacity: 1;
                display: flex;
            }
        }
    }
`

export const WrappedMessages = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
`

export const MessageParagraph = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
`

export const ButtonNext = styled.button`
    opacity: ${({ disabled }) => disabled ? 0 : 1};
    display: flex;
    align-items: center;
    gap: 0.8rem;

    &:hover {
        background-color: rgba(0,0,0,0.5);
    }

    &:active {
        background-color: rgba(0,0,0,0.9);
    }
`

export const MovieBarTop = styled.div`
    background-color: black;
    transition: all 1s;
    height: 0;
`

export const MovieBarBottom = styled.div`
    background-color: black;
    transition: all 1s;
    height: 0.1rem;
`

export const Content = styled.div`
    background-color: rgba(0,0,0,0);
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4rem;
    font-size: clamp(1rem, 1.25rem + 2vw, 2.4rem);

    opacity: 0;
    transition: all 1s;

    @media (max-width: 500px) {
        padding: 2rem;
        //font-size: 2rem;
    }
`

export const KeyboardLetter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid white;
    border-radius: 50%;

    width: 2rem;
    height: 2rem;

    font-size: 1rem;
`