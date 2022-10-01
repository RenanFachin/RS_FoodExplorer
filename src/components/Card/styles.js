import styled from 'styled-components'

export const Container = styled.div`
    width: 30rem;
    height: 51.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background: rgba(0, 0, 0, 0.32);

    padding: 4.2rem 4rem 4rem;
    border-radius: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.65);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    position: relative;

    .FavoriteDish {
        background: transparent;
        position: absolute;
        right: 4.8rem;
        top: 1.6rem;

        > svg {
        color: ${({theme})=> theme.COLORS.WHITE};
        background: transparent;
        position: absolute;
        width: 3.2rem;
        height: 3.2rem;
        }
    } 

    
    img {
        width: 17.6rem;
        height: 17.6rem;
    }

    h2 {
        font-weight: 700;
        line-height: 3.6rem;
        text-align: center;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.24rem;
        color: ${({theme})=> theme.COLORS.GRAY_100};
        text-align: center;
    }

    h4 {
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 5.12rem;

        color: ${({theme})=> theme.COLORS.VALUE_TEXT}
    }


    .AmountItemsAndBuy-wrapper {
        display: flex;
        align-items: center;
        gap: 1.9rem;

        span {
            font-weight: 700;
            font-size: 2rem;
            line-height: 3.2rem;
            color: ${({theme})=> theme.COLORS.GRAY};
        }

        .Amount {
            display: flex;
            /* align-items: center; */
            gap: 1.5rem;

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
    }
`;