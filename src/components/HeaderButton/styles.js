import styled from 'styled-components'


export const Container = styled.button`

    background-color: ${({theme})=> theme.COLORS.BUTTON};
    color: ${({theme})=> theme.COLORS.WHITE};

    /* width: 100%; */
    width: 216px;

    height: 56px;

    border-radius: 5px;

    padding: 12px 32px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    > svg {
        width: 32px;
        height: 32px;
    }
`;