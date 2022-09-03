import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-around;

    animation: fadeIn 0.8s;

    > div{
        display: flex;
        align-items: center;
        gap: 2rem;

        > h1 {
            font-size: 4.2rem;
            line-height: 5rem;
        }

        > svg {
            animation: fade 6s infinite;
            width: 7rem;
            height: 7rem;
        }
    }

    @media (max-width: 810px) {
    > div{
        > h1 {
            font-size: 3.6rem;
        }
        > svg {
            width: 6rem;
            height: 6rem;
        }
    }
}


    @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;

    > div{
        padding: 1.2rem;
        > h1 {
            font-size: 3.2rem;
            line-height: 4rem;
        }
        > svg {
            width: 5.2rem;
            height: 5.2rem;
        }
    }
}

    @media (max-width: 350px) {

    > div{
        padding: 1rem;
        > h1 {
            font-size: 2.8rem;
            line-height: 4rem;
        }
        > svg {
            width: 4.8rem;
            height: 4.8rem;
        }
    }
}

@keyframes fade {
    0%{
        opacity: 0.1;
        transform: scale(0.9);
    }
    100% {
        opacity: 0.6;
        transform: scale(1);
    }
}

@keyframes fadeIn {
    0%{
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

`;

export const Form = styled.form`

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};
    min-width: 47.6rem;
    min-height: 54rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 6.4rem;
    gap: 3.2rem;
    
    border-radius: 1.6rem;
    
    animation: fadeIn 0.8s;

    box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.1);

    >h2 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 2.4rem;
        text-align: center;
    }

@media (max-width: 768px) {
    min-width: 42rem;
    padding: 4.8rem;
    margin: 0 1rem;
}

@media (max-width: 500px) {
    min-width: 34rem;
    padding: 3.2rem;
    margin: 0 1rem;

    >h2 {
        font-size: 2.8rem;
        line-height: 2rem;
    }
}

@media (max-width: 350px) {
    min-width: 30rem;
    padding: 3.2rem;
    margin: 0 2rem;

    >h2 {
        font-size: 2.2rem;
    }
}

@keyframes fadeIn {
    0%{
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

`
