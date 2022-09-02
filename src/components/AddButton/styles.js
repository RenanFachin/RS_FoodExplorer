import styled from 'styled-components'

export const Container = styled.button`

    background-color: ${({theme})=> theme.COLORS.BUTTON_SIGNIN};
    color: ${({theme})=> theme.COLORS.WHITE};
    
    margin-top: 1.6rem;

    width: 9.2rem;
    height: 4.8rem;

    border-radius: 0.5rem;
    padding: 1.2rem 2.4rem;

`;