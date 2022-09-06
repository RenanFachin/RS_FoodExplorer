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
                    title={"Salada de Ravanello"}
                    description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                    price={25.97}
                />
            </Main>

            <Footer />
        </Container>
    )
}