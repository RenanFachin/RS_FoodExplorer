import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 0.5rem;
    padding: 0.2rem;

    // Background condicional:
    background-color: ${({isNew}) => isNew? "transparent" : "rgba(255, 255, 255, 0.1)"};

    color: ${({theme}) => theme.COLORS.WHITE};

    // Borda condicional:
    border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none'};

    /* margin-bottom: 0.8rem; */
    border-radius: 1rem;
    padding-right: 1rem;

    > Button {
        border: none;
        background: none;
    }

    .button-delete{
        color: ${({theme}) => theme.COLORS.TEXT_NOTOK}
    }

    .button-add{
        color: ${({theme}) => theme.COLORS.TEXT_OK}
    }

    > input {
        height: 3rem;
        max-width: 13rem;
        padding: 2rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        border: none;
        background: transparent;
    }
`;