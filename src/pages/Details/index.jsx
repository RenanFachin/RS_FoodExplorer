import { Container, Main } from './style';

import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { DetailsCard } from '../../components/DetailsCard'

export function Details(){
    return(
        <Container>
            <Header />

            <Main>
                <DetailsCard                                        
                title={'aaa'}
                description={'aaa'}
                price={19.99}
                />
            </Main>

            <Footer />
        </Container>
    )
}