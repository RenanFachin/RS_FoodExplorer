import { Container, Main } from './style';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderItem } from '../../components/OrderItem'

export function OrderPage(){
    return(
        <Container>
            <Header />

            <Main>
                <section className='allOrders'>
                    <h2>Meu pedido</h2>

                    <OrderItem 
                    qntd={1}
                    title={"PomoBourbon"}
                    price={79.97}
                    />

                    <OrderItem 
                    qntd={3}
                    title={"Torradas de Parma"}
                    price={25.97}
                    />

                    <OrderItem 
                    qntd={2}
                    title={"Bolo de damasco"}
                    price={19.97}
                    />
                    
                    <OrderItem 
                    qntd={2}
                    title={"Bolo de damasco"}
                    price={19.97}
                    />

                    <OrderItem 
                    qntd={2}
                    title={"Bolo de damasco"}
                    price={19.97}
                    />

                    <span className='priceItems'>Total: R$ 197,82</span>
                </section>


                <section className='paymentMethods'>
                    <h2>Pagamento</h2>
                </section>
                
            </Main>

            <Footer />
        </Container>
    )
}