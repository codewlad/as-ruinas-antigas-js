import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.4rem;

    #buttonStartGame {
        position: relative;
        padding: 0;
        border: 0;

        -webkit-tap-highlight-color: transparent;
        outline: none;

        &:hover div:first-child {
            animation: pulse 1s ease-in-out infinite 1s;

            @keyframes pulse {
                0%, 100% {
                    transform: scale(1);
                }

                50% {
                    transform: scale(1.1);
                }
            }
        }
    }

    ::-webkit-scrollbar {
        width: 0rem;
        height: 0rem;
    }
`

export const Content = styled.div`
    position: relative;
    max-width: 768px; // 48*16
    height: 528px;    // 48*11
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    overflow: auto;

    scroll-behavior: smooth;
`

export const Start = styled.div`
    position: absolute;
    top: 243px;
    left: 147px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 3rem;

    transform: scale(1);
    transition: transform 1s ease-in-out;
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

    color: white;
`