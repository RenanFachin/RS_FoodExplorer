import styled from "styled-components";

import {Link} from 'react-router-dom'

export const Container = styled.div`
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

    .ingredients{
        display: flex;
        gap: 4rem;
    }

    .ingredients-wrapper{
        display: flex;
        flex-direction: column;

        > img{
            width: 6rem;
            height: 6rem;
        }

        > span {
            font-size: 1.8rem;
            line-height: 2.6rem;
            font-weight: 300;
            color: ${({theme}) => theme.COLORS.GRAY};
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
`;

export const ButtonBack = styled(Link)`
    background-color: transparent;
    color: ${({theme})=> theme.COLORS.GRAY};

    display: flex;
    align-items: center;

    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.6rem;
    margin-top: 14rem;

    position: absolute;
    top: -10rem;

`;