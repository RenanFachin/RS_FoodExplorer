import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 10.4rem;
    background-color: ${({theme}) => theme.COLORS.BRACKGROUND_HEADER};
`;

export const Content = styled.div`
    display: flex;
    align-items: center;

    gap: 3.2rem;

    padding: 2.4rem 12.3rem;

    button {
        max-width: 21.6rem;
    }
    
    > a {
        min-width: 14rem;
        color: ${({theme}) => theme.COLORS.GRAY};
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        line-height: 2.6rem;
        font-weight: 400;
        text-align: center;
    }

    @media (max-width: 1140px){
        gap: 2rem;
        padding: 2.4rem 6rem;

        > a {
        min-width: 12rem;
        }
    }

    @media (max-width: 850px) {
        gap: 1.6rem;
        padding: 2.4rem 3rem;

        > a {
        min-width: 12rem;
        font-size: 1.4rem;
        text-align: center;
        }

        button {
            max-width: 12rem;
            font-size: 1.2rem;
            padding: 0.6rem 2rem;
            /* gap: 0px; */

            > svg {
                display: none
            }
        }

    }

    @media (max-width: 600px) {
        gap: 1rem;
        padding: 2.4rem 1.5rem;

        > a {
        min-width: 8rem;
        font-size: 1.2rem;
        }

        button {
        max-width: 12rem;
        font-size: 1.2rem;
        padding: 0.4rem 1rem;
        }
    }

    @media (max-width: 430px) {
        gap: 0.rem;
        padding: 2.4rem 1rem;

        > a {
        min-width: 6rem;
        font-size: 1.2rem;
        }

        button {
        max-width: 8rem;
        font-size: 1rem;
        }
    }
`;

export const Logo = styled.div`
    min-width: 20rem;
    gap: 1.2rem;

    display: flex;
    align-items: center;

    > h1 {
        font-size: 2.6rem;
    }

    > svg {
        width: 3rem;
        height: 3rem;
    }
    
    @media (max-width: 1140px){
    min-width: 18rem;
    > h1 {
        font-size: 2rem;
    }
    }

    @media (max-width: 850px) {
        min-width: 6rem;
        gap: 0rem;

        h1{
            display: none;
        }

        > svg {
        width: 6rem;
        height: 6rem;
    }
}

    @media (max-width: 600px) {
        display: none;
    }
`;

export const Search = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.INPUT_BACKGROUND};
    border-radius: 8px;

    > input {
        height: 4.8rem;
        width: 100%;
        padding: 1.6rem 1.4rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: ${({theme}) => theme.COLORS.INPUT_BACKGROUND};
        border: none;
        border-radius: 8px;
    }

    > svg {
        margin-left: 1.4rem;
        fill: ${({theme}) => theme.COLORS.GRAY_100};;
    }

    @media (max-width: 850px) {
        > input {
            font-size: 1.4rem;
            padding: 1.2rem 1rem;
        }
    }

    @media (max-width: 600px) {
        > input {
            padding: 0.8rem 0.6rem;
            font-size: 1.4rem;
        }

        > svg {
        margin-left: 1rem;
        fill: ${({theme}) => theme.COLORS.GRAY_100};;
        }
    }

`;

export const Logout = styled.div`
    svg {
      width: 3.2rem;
      height: 3.2rem;
    }

    @media (max-width: 850px) {
        svg {
        width: 2.2rem;
        height: 2.2rem;
        }
    }

    @media (max-width: 600px) {
        svg {
        width: 1.8rem;
        height: 1.8rem;
        }
    }

`;


// @media (max-width: 500px) {
// }