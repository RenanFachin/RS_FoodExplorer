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
    flex-direction: column;
    padding: 2.4rem 12.3rem;
    gap: 8rem;

    @media (max-width: 768px){
        width: 76.8rem;
        padding: 1rem 4rem;
        gap: 4rem;
    }

    @media (max-width: 425px){
        width: 38.2rem;
        padding: 0.5rem 2rem;
        gap: 4rem;
    }
`;

export const ButtonBack = styled.div`
    margin: 1.8rem 0;
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

    @media (max-width: 768px){
        > a {
            font-size: 2rem;
            line-height: 3rem;

            > svg {
                width: 2.4rem;
                height: 2.4rem;
            }
        }
    }
    @media (max-width: 425px){
        > a {
            font-size: 1.8rem;
            line-height: 2.8rem;

            > svg {
                width: 2.2rem;
                height: 2.2rem;
            }
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    min-height: 46.5rem;

    display: flex;
    align-items: center;
    gap: 6rem;

    position: relative;

    img {
        width: 45rem;
        height: 45rem;
    }

    h4 {
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 5.12rem;

        color: ${({theme})=> theme.COLORS.VALUE_TEXT}
    }

    .details{
        display: flex;
        flex-direction: column;   
        gap: 3rem;
        width: 60.3rem;
        height: 35.6rem;

    }

    .details-wrapper{
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        > h2 {
            font-size: 4rem;
            color: ${({theme}) => theme.COLORS.GRAY};
            font-weight: 500;
            line-height: 5.6rem;
        }

        > p {
            font-size: 2.4rem;
            color: ${({theme}) => theme.COLORS.GRAY};
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            line-height: 3.4rem;
        }
    }
    
    .Amount {
            display: flex;
            align-items: center;
            gap: 2rem;

            .PlusItem,
            .MinusItem{
                display: flex;
                align-items: center;
                background: transparent;
                color: ${({theme})=> theme.COLORS.WHITE};

                > svg {
                width: 1.8rem;
                height: 1.8rem;
            }

        }


    }

    .AmountItemsAndBuy-wrapper {
        display: flex;
        align-items: center;
        gap: 5.4rem;

        span {
            font-weight: 700;
            font-size: 2rem;
            line-height: 3.2rem;
            color: ${({theme})=> theme.COLORS.GRAY};
    }
    }

    @media (max-width: 768px){
        min-height: 40.8rem;
        gap: 4rem;
        justify-content: space-around;

        img {
            width: 25rem;
            height: 25rem;
        }

        h4 {
            font-size: 1.8rem;
            line-height: 2rem;
        }

        .details{
            gap: 2rem;
            width: 32.6rem;
            height: 32.6rem;
        }

        .details-wrapper{
            gap: 0.6rem;

            > h2 {
                font-size: 3.2rem;
                line-height: 4rem;
            }

            > p {
                font-size: 2rem;
                line-height: 3rem;
            }
        }
        
        .AmountItemsAndBuy-wrapper {
        gap: 2rem;

        span {
            font-size: 1.8rem;
            line-height: 3rem;
            }
        }

        .Amount{
            gap: 2rem;
        }
    }

    @media (max-width: 425px){
        min-height: 38.8rem;
        flex-direction: column;

        h4 {
            font-size: 2rem;
            line-height: 1.8rem;
        }

        .details{
            gap: 1rem;
            width: 29rem;
            height: 25rem;
            justify-content: space-around;
        }

        .details-wrapper{
            gap: 0.4rem;

            > h2 {
                font-size: 2.2rem;
                line-height: 2.8rem;
            }

            > p {
                font-size: 1.4rem;
                line-height: 2rem;
            }
        }

        .AmountItemsAndBuy-wrapper {
        gap: 0rem;
        justify-content: space-between;

        span {
            font-size: 1.4rem;
            line-height: 1rem;
            }
        }

        .Amount{
            gap: 2rem;
        }
    }

`;

export const AllIngredientCards = styled.section`
    display: flex;
    gap: 4rem;

    @media (max-width: 768px){
        gap: 0rem;
        justify-content: space-between;
    }
    @media (max-width: 425px){
        gap: 0rem;
        justify-content: space-between;
    }
`;