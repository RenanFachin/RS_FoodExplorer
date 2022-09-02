import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};

    > label{
        width: 100%;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > input {
        height: 48px;
        width: 100%;
        padding: 12px 14px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border-radius: 5px;
        border: 1px solid white;
    }
    
    > svg {
            margin-left: 14px;
    }
`;