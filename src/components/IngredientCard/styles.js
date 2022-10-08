import styled from 'styled-components'

export const Container = styled.section`
        display: flex;
        gap: 4rem;

    .ingredients-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.4rem;

        > img{
            width: 6rem;
            height: 6rem;
        }

        > span {
            font-size: 1.8rem;
            line-height: 2.6rem;
            font-weight: 300;
            color: ${({theme}) => theme.COLORS.GRAY};
        }
    }
    
    @media (max-width: 768px){
        gap: 1rem;

        .ingredients-wrapper{
            gap: 1rem;
        
            > img{
                width: 5rem;
                height: 5rem;
            }

            > span {
                font-size: 1.4rem;
                line-height: 2rem;
            }
        }
    }

    @media (max-width: 425px){
        gap: 1rem;

        .ingredients-wrapper{
            gap: 1rem;
        
            > img{
                width: 4rem;
                height: 4rem;
            }

            > span {
                font-size: 1.4rem;
                line-height: 2rem;
            }
        }
    }
`;