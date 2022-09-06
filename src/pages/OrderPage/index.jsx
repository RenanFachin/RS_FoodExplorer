import { Container, Main } from './style';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function OrderPage(){
    return(
        <Container>
            <Header />

            <Main>
                <h2>ORDERPAGE</h2>
            </Main>

            <Footer />
        </Container>
    )
}