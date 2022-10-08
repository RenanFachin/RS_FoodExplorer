import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    margin-bottom: 4rem;
    h2 {
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 4.5rem;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 768px){
        gap: 2rem;
        margin-bottom: 0rem;
        margin-top: 2rem;
        h2 {
            font-size: 2.8rem;
            line-height: 3.5rem;
            text-align: center;
        }
    }
`;



export const Slider = styled.div`
    max-width: 112.2rem;
    height: 51.2rem;

    position: relative;

    display: flex;
    justify-content: space-between;


    > div {
    display: flex;
    gap: 2.7rem;
    overflow-x: auto;
    scroll-behavior: smooth;
        ::-webkit-scrollbar {
            display: none;
        }
  }

    .ArrowBack,
    .ArrowForward{
        background: transparent;
        color: ${({theme})=> theme.COLORS.WHITE};
        z-index: 10;
    }

    .ArrowBack{
        background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 10%, #000A0F 100%);
    }

    .ArrowForward{
        background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
    }

    @media (max-width: 768px){
    width: 100%;
    /* max-width: 66.8rem; */

    > div {
    display: flex;
    gap: 1rem;
    }
  }
`;