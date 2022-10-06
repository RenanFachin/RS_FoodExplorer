// Import de estilizações
import { Container, Main } from './styles'

// Import de componentes
import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { Card } from '../../components/Card/'
import { Section } from '../../components/Section/'

// Import de hooks e api
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import bannerIMG from '../../assets/main_image.png'

export function Home(){
    const [dishes, setDishes] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        async function fetchDishes() {
          const response = await api.get(`/dishes?title=${search}`);
          setDishes(response.data);
    }

    fetchDishes();
    }, [search])

    return(
        <Container>
                <Header search={setSearch}/>

                <Main>
                    <section className='Banner'>
                        <img src={bannerIMG} alt="Macarrons" />

                        <div className='Banner-background'>
                            <div>
                                <h2>Sabores inigualáveis</h2>
                                <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                            </div>
                        </div>
                    </section>


                    {
                        dishes.filter(dish => dish.category == "mainCourse").length > 0 &&
                        <Section type = "Pratos Principais">
                        {
                            dishes.filter(dish => dish.category == "mainCourse").map(dish => (
                            <Card
                                key={String(dish.id)}
                                data={dish} 
                            />
                            ))
                        }
                        </Section>
                    }


                    {
                        dishes.filter(dish => dish.category == "dessert").length > 0 &&
                        <Section type = "Sobremesa">
                        {
                            dishes.filter(dish => dish.category == "dessert").map(dish => (
                            <Card
                                key={String(dish.id)}
                                data={dish} 
                            />
                            ))
                        }
                        </Section>
                    }

                    {
                        dishes.filter(dish => dish.category == "drink").length > 0 &&
                        <Section type = "Bebidas">
                        {
                            dishes.filter(dish => dish.category == "drink").map(dish => (
                            <Card
                                key={String(dish.id)}
                                data={dish} 
                            />
                            ))
                        }
                        </Section>
                    }              
    
                </Main>

                <Footer />
        </Container>
    )
}