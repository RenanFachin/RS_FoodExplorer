import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;  

    display: grid;
    grid-template-rows: 10.4rem auto 7.2rem;
    grid-area: 
    "header"
    "main"
    "footer";

`;

export const Main = styled.main`
    grid-area: "main";
    /* max-width: 136.8rem; */
    margin: 0 auto;
    width: 136.8rem;
    
    display: flex;

    border: 1px solid white;

`;

export const ButtonBack = styled.div`
    margin: 3.2rem 0;
    max-width: 136.8rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > a {
        background-color: transparent;
        color: ${({theme})=> theme.COLORS.GRAY};

        display: flex;
        align-items: center;

        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.6rem;

    }

    > h2 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 4.48rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

`;