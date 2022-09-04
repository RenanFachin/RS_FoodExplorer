import styled from 'styled-components'


export const Container = styled.button`
    background-color: ${({theme})=> theme.COLORS.BUTTON};
    color: ${({theme})=> theme.COLORS.WHITE};

    width: 21.6rem;
    height: 5.6rem;

    border-radius: 0.5rem;

    padding: 1.2rem 3.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    > svg {
        width: 3.2rem;
        height: 3.2rem;
    }
`;