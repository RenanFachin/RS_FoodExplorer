import styled from "styled-components";

export const Container = styled.div`
    grid-area: "main";
    margin: 0 auto;
    width: 136.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    img{
        width: 30rem;
        height: 30rem;
        animation: floaty 1.8s infinite alternate;

    }

    div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        animation: topdown 0.8s;

        h4{
            font-size: 1.8rem;
            font-weight: 300;
        }


        span{
            font-weight: 700;
            font-size: 5rem;
            color: ${({theme})=> theme.COLORS.TEXT_DELETE}
        }

        button{
            margin-top: 3rem;
            width: 12rem;
        }
    }


        @keyframes floaty {
        0% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(30px);
        }
        }

        @keyframes topdown {
        0%{
            opacity: 0;
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;