import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    gap: 1.5rem;

    /* margin-top: 3.2rem; */

    img {
        width: 7.2rem;
        height: 7.2rem;
    }

    .details{
        display: flex;
        align-items: baseline;
        gap: 1rem;

        h3{
            font-weight: 500;
            font-size: 2rem;
            line-height: 3.2rem;
            color: ${({theme})=> theme.COLORS.GRAY}
        }

        span{
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 2rem;
            color: ${({theme})=> theme.COLORS.GRAY_100}
        }
    }

    .orderDetails{
        padding-left: 2rem;
    }

    .deleteButton{
        background-color: transparent;
        color: ${({theme})=> theme.COLORS.TEXT_DELETE};
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 2rem;
        width: 3.6rem;
        height: 2rem;
    }
`;