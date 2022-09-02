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
        gap: 20px;

        > h1 {
            font-size: 42px;
            line-height: 50px;

        }
    }

`;

export const Form = styled.form`

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};
    min-width: 476px;
    min-height: 540px;

    padding: 64px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap: 32px;
    border-radius: 16px;

    >h2 {
        font-size: 32px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
    }

`
