import { Container, Main } from './styles'

import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { Card } from '../../components/Card/'
import { Section } from '../../components/Section/'

import {mainCourse, dessert, drink} from '../../../src/utils/database'

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
                    type = "Pratos Principais"
                    >
                    
                    {mainCourse.map((dish) => (
                        <Card 
                        key={String(dish.id)}
                        title={dish.title}
                        price={dish.price}
                        description={dish.description}
                        />
                    ))}
                    
                    </Section>

                    <Section 
                    type = "Sobremesa"
                    >
                    
                    {dessert.map((dish) => (
                        <Card
                        key={String(dish.id)}
                        title={dish.title}
                        price={dish.price}
                        description={dish.description}
                        />
                    ))}
                    
                    </Section>

                    <Section 
                    type = "Bebidas"
                    >
                    
                    {drink.map((dish) => (
                        <Card 
                        key={String(dish.id)}
                        title={dish.title}
                        price={dish.price}
                        description={dish.description}
                        />
                    ))}
                    </Section>                 
    
                </Main>

                <Footer />
        </Container>
    )
}