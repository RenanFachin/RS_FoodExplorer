import styled from 'styled-components'

export const Container = styled.button`

    background-color: ${({theme})=> theme.COLORS.BUTTON_SIGNIN};
    color: ${({theme})=> theme.COLORS.WHITE};

    width: 100%;
    height: 48px;

    border-radius: 5px;

    padding: 12px 32px;

    &disabled{
        opacity: 0.5;
    }
`;