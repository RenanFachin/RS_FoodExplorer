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
    min-width: 136.8rem;
    padding: 2.4rem 12.3rem;
    
    display: grid;
    grid-template-columns: 2fr 3fr;
    
    margin: 0 auto;

    h2 {
        font-size: 3.2rem;
        line-height: 4.5rem;
        font-weight: 500;
        color: ${({theme})=> theme.COLORS.GRAY};

    }

    .allOrders{
        border: 1px solid blue;       
        display: flex;
        flex-direction: column;

        gap: 3.2rem;
   }

    .paymentMethods{
        border: 1px solid green;
        margin-left: 3rem;
    }

`;