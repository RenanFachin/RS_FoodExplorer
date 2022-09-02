import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-around;

    > div{
        display: flex;
        align-items: center;
        gap: 2rem;

        > h1 {
            font-size: 4.2rem;
            line-height: 5rem;
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

    >h2 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 2.4rem;
        text-align: center;
    }

`
