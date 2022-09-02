import styled from 'styled-components'

export const Container = styled.button`

    background-color: ${({theme})=> theme.COLORS.BUTTON_SIGNIN};
    color: ${({theme})=> theme.COLORS.WHITE};
    
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;

    margin-top: 16px;

    width: 92px;
    height: 48px;

    border: none;
    border-radius: 5px;
    padding: 12px 24px;

`;