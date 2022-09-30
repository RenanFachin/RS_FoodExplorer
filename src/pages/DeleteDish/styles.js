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
    width: 70rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 2.4rem 12.3rem;


    h2 {
        font-size: 2rem;

        >span{
            color: ${({theme})=> theme.COLORS.TEXT_DELETE}
        }
    }
`;