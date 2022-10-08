import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: "header";


    width: 100%;
    min-height: 10.4rem;
    background-color: ${({theme}) => theme.COLORS.BRACKGROUND_HEADER};
`;

export const Content = styled.div`
    max-width: 136.8rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2.4rem 12.3rem;
    margin: auto;

    .adm-header{
        svg{
            margin-left: 5rem;
        }
    }

    @media (max-width: 768px){
        max-width: 65.8rem;
        margin: 0 auto;
        padding: 2.4rem 0;
    }

    @media (max-width: 425px){
        max-width: 42rem;
        margin: 0 auto;
        justify-content: center;
        gap: 1rem;
    }
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    >h2{
        font-size: 2.4rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        line-height: 3rem;
    }

    @media (max-width: 768px){
        gap: 0.6rem;

        >h2{
        font-size: 1.8rem;
        line-height: 2.4rem;
        }
    }

    @media (max-width: 425px){
        display: none;
    }
`;

// export const Favorites = styled.div`
//     > a {
//     font-family: 'Roboto', sans-serif;
//     font-size: 1.6rem;
//     font-weight: 400;
//     color: ${({theme}) => theme.COLORS.GRAY};
//     text-decoration: none;
//     }   
// `;

export const Search = styled.div`
    width: 50rem;

    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.INPUT_BACKGROUND};
    border-radius: 0.8rem;

    border: 2px solid transparent;
    &:focus-within{
        border: 2px solid ${({theme}) => theme.COLORS.VALUE_TEXT};
    }

    > input {
        height: 4.8rem;
        width: 100%;
        padding: 1.6rem 1.4rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: ${({theme}) => theme.COLORS.INPUT_BACKGROUND};
        border: none;
        border-radius: 0.8rem;

    }

    > svg {
        margin-left: 1.4rem;
        fill: ${({theme}) => theme.COLORS.GRAY_100};;
    }
    
    @media (max-width: 768px){
        width: 25rem;

        > svg {
        margin-left: 1rem;
        }
    }

    @media (max-width: 425px){
        width: 15rem;
    }
`;

export const Profile = styled.button`
    text-decoration: none;
    border: none;
    outline: none;
    background: transparent;
    
    > svg {
        color: ${({theme}) => theme.COLORS.WHITE};
        width: 3.2rem;
        height: 3.2rem;

        transition: all 400ms ease;

        &:hover{
            transform: scale(1.2);
        }
    }

    @media (max-width: 425px){
        >svg {
            width: 2.8rem;
            height: 2.8rem;
        }
    }
`;

export const Logout = styled.button`
    text-decoration: none;
    border: none;
    outline: none;
    background: transparent;
    
    > svg {
        color: ${({theme}) => theme.COLORS.WHITE};
        width: 3.2rem;
        height: 3.2rem;

        transition: all 400ms ease;

        &:hover{
            transform: scale(1.2);
        }
    }

    @media (max-width: 425px){
        >svg {
            width: 2.8rem;
            height: 2.8rem;
        }
    }
`;
