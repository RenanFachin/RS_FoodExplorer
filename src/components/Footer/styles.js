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
`;

export const Copyright = styled.span`
    > span {
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: ${({theme})=> theme.COLORS.WHITE_200}
    }
`;