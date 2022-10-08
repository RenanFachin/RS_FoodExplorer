import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    background-color: ${({theme})=> theme.COLORS.BUTTON};
    color: ${({theme})=> theme.COLORS.WHITE};

    width: 21.6rem;
    height: 5.6rem;

    border-radius: 0.5rem;

    padding: 1.2rem 3.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    > svg {
        width: 3.2rem;
        height: 3.2rem;
    }

    @media (max-width: 768px){
        width: 16rem;
        padding: 1.2rem 1.2rem;

        > svg {
        display: none;
        }
    }

    @media (max-width: 425px){
        font-size: 1.2rem;
        width: 12rem;
        padding: 0.5rem 0.5rem;
    }
`;