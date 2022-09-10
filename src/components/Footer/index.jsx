import { Container, Content, Logo, Copyright } from './styles'

export function Footer(){
    return(
        <Container>
            <Content>
                <Logo>
                <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0635 0.0510254L25.7096 7.35221V21.9546L13.0635 29.2557L0.417527 21.9546V7.35221L13.0635 0.0510254Z" fill="white" fillOpacity="0.3"/>
                </svg>

                <h2>food explorer</h2>
                </Logo>

                <Copyright>
                    <span>© 2022 - Todos os direitos reservados.</span>
                </Copyright>
            </Content>
        </Container>
    )
}