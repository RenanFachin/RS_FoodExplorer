import { Container, Main } from './style';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function OrderHistory(){
    return(
        <Container>
            <Header />

            <Main>
                <h2>ORDERHISTORY</h2>
            </Main>

            <Footer />
        </Container>
    )
}