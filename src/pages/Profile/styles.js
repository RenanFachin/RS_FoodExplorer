import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.4rem auto;
    grid-area: 
    "header"
    "main";
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

    @media (max-width: 768px){
        width: 70rem;

        .profile-card{
        width: 40%;
        }

        .profile-option{
        width: 60%;
        
        display: flex;
        gap: 4rem;

        padding: 8rem;

            .logo-icon{
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    @media (max-width: 425px){
        width: 40rem;
        
        .profile-card{
        width: 60%;
        }

        .profile-option{
        width: 40%;
        
        display: flex;
        gap: 3rem;
        margin: auto;

        padding: 1rem;

            .logo-icon{
                display: none;
            }
        }
    }
`;

export const Form = styled.form`

    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    // Centralizando
    width: 80%;
    margin: 6rem auto;

    button{
        margin-top: 2rem;
    }

    > div {
        border: 2px solid transparent;

        &:focus-within{
        border: 2px solid ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

    > div:nth-child(4) {
        margin-top: 2rem;
    }

    @media (max-width: 768px){
        height: 90%;
        margin: 2rem auto;
    }

`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 3.2rem;

    width: 17rem;
    height: 17rem;

    >img {
        width: 17rem;
        height: 17rem;
        border-radius: 50%;
    }

    > label {
        width: 4rem;
        height: 4rem;

        background-color: ${({theme})=> theme.COLORS.PROFILE_BUTTONS};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 1rem;
        right: 1rem;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({theme})=> theme.COLORS.GRAY_100};
        }
    }
`;