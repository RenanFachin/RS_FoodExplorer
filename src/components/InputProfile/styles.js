import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};

    > input {
        height: 4.8rem;
        width: 100%;
        padding: 1.2rem 1.4rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border-radius: 0.5rem;
        border: none;
    }

    > svg {
        margin-left: 16px;
    }

`;