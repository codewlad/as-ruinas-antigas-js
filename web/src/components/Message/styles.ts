import styled from 'styled-components';

export const Container = styled.div`
    //border: 1px solid blue;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
`

export const MessageParagraph = styled.div`
    //border: 1px solid red;
    width: 100%;
    display: flex;
    flex: 1;
    //align-items: center;
    //justify-content: center;
`

export const ButtonNext = styled.button`
    opacity: ${({ disabled }) => disabled ? 0 : 1};

    &:hover {
        background-color: rgba(0,0,0,0.5);
    }

    &:active {
        background-color: rgba(0,0,0,0.9);
    }

`