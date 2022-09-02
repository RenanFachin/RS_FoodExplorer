import styled from 'styled-components'

export const Container = styled.button`

    background-color: ${({theme})=> theme.COLORS.BUTTON_SIGNIN};
    color: ${({theme})=> theme.COLORS.WHITE};
    
    margin-top: 16px;

    width: 92px;
    height: 48px;

    border-radius: 5px;
    padding: 12px 24px;

`;