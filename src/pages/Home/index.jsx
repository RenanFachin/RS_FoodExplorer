import { Container, Main } from './styles'

import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { Card } from '../../components/Card/'
import { Section } from '../../components/Section/'

export function Home(){
    return(
        <Container>
                <Header />

                <Main>
                    <section className='Banner'>
                        <img src="../../../src/assets/main_image.png" alt="Macarrons" />

                        <div className='Banner-background'>
                            <div>
                                <h2>Sabores inigualáveis</h2>
                                <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                            </div>
                        </div>
                    </section>


                    <Section 
                    title = "Pratos Principais"
                    >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    </Section>

                    {/* <Section 
                    title = "Sobremesas"
                    />

                    <Section 
                    title = "Bebidas"
                    /> */}


                    {/* <section className='CardWrapper'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </section> */}

                    

                    
                </Main>

                <Footer />
        </Container>
    )
}