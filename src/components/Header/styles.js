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
    min-width: 50rem;

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
`;
