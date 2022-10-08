import styled from 'styled-components'

export const Container = styled.div`
    grid-area: "footer";

    width: 100%;
    min-height: 7.2rem;
    background-color: ${({theme}) => theme.COLORS.BRACKGROUND_HEADER};
`;

export const Content = styled.div`
    max-width: 136.8rem;
    margin: auto;

    padding: 2.4rem 12.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px){
        max-width: 70.8rem;
        padding: 2.4rem 0;
    }

    @media (max-width: 425px){
        max-width: 42rem;
        flex-direction: column;
        padding: 1rem 0;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    >h2{
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        line-height: 2.9rem;
        line-height: 3rem;
        opacity: 0.3;
    }

    @media (max-width: 425px){
        gap: 0.8rem;

        >h2 {
            line-height: 2rem;
            line-height: 1.5rem;
        }
    }
`;

export const Copyright = styled.span`
    > span {
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: ${({theme})=> theme.COLORS.WHITE_200}
    }

    @media (max-width: 425px){
    > span {
        font-size: 1.2rem;
        line-height: 1rem;
    }
    }
`;