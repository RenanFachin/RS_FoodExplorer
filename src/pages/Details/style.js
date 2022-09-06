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
    max-width: 136.8rem;
    
    display: flex;
    margin: 0 auto;
`;