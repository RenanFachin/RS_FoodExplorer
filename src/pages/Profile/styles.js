import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.4rem auto 7.2rem;
    grid-area: 
    "header"
    "main"
`;

export const Main = styled.main`
    grid-area: "main";
    margin: 8rem auto;
    /* width: 136.8rem; */
    width: 110rem;

    display: flex;
    /* padding: 2.4rem 12.3rem; */
    gap: 2rem;
    background-color: ${({theme}) => theme.COLORS.BRACKGROUND_HEADER};
    box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.1);

    .profile-card{
        width: 33%;
        box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.1);
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_PAYMENTBUTTON};
    }

    .profile-option{
        width: 67%;
        
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 5rem;

        padding: 8rem 16rem;

        button{
            background-color: ${({theme})=> theme.COLORS.PROFILE_BUTTONS};
            box-shadow: 0px 0px 8px 2px rgba(255, 255, 255, 0.1);
        }

        .logo-icon{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

