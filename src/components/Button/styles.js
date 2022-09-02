import styled from 'styled-components'

export const Container = styled.button`

    background-color: ${({theme})=> theme.COLORS.BUTTON_SIGNIN};
    color: ${({theme})=> theme.COLORS.WHITE};

    font-weight: 500;
    line-height: 24px;
    font-size: 14px;

    width: 100%;
    height: 48px;

    border: none;
    border-radius: 5px;

    padding: 12px 32px;
    margin-top: 32px;

    &disabled{
        opacity: 0.5;
    }
`;