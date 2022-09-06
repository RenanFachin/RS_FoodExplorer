import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;  

    display: grid;
    grid-template-rows: 10.4rem auto 7.2rem;
    grid-area: 
    "header"
    "main"
    "footer";
`;

export const Main = styled.main`
    grid-area: "main";
    min-width: 136.8rem;
    padding: 2.4rem 12.3rem;
    
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 3.5rem;

    h2 {
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 4.5rem;
        color: ${({theme})=> theme.COLORS.GRAY};
    }
    
    .tableStyles {
        font-size: 1.4rem;


        table {
            text-align: left;
            border-spacing: 0;
            overflow: hidden;
        }

        thead{
            th {
                color: ${({theme})=> theme.COLORS.GRAY};
                padding: 0.8rem 2.4rem;
                border: 1px solid #192227;
                min-width: 18rem;
                height: 6.4rem;
            }
            
        }
        tbody {
            td {
                color: ${({theme})=> theme.COLORS.GRAY_100};
                padding: 1.6rem 2.4rem;
                border: 1px solid #192227;
                height: 6.4rem;

                span {
                    padding-left: 2rem;
                }
            }
        }

        .dot{
            display: flex;
            align-items: center;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            border: none;

            &.red{
                background: ${({theme})=> theme.COLORS.TEXT_NOTOK};
            }

            &.green{
                background: ${({theme})=> theme.COLORS.TEXT_OK};
            }

            &.yellow{
                background: ${({theme})=> theme.COLORS.TEXT_PENDING};
            }
        }
    }
`;