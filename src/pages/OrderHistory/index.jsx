// import de estilizações
import { Container, Main } from './style';

// Import de componentes
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function OrderHistory(){
    return(
        <Container>
            <Header />

            <Main>
                <h2>Pedidos</h2>

                <div className='tableStyles'>
                    <table>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Código</th>
                                <th>Detalhamento</th>
                                <th>Data e Hora</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <div className="dot yellow">
                                        <span>Preparando</span>
                                    </div>
                                </td>

                                <td>00000004</td>
                                <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                <td>20/05 às 18h00</td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="dot green">
                                        <span>Entregue</span>
                                    </div>
                                </td>
                                
                                <td>00000003</td>
                                <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                <td>20/05 às 18h00</td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="dot green">
                                        <span>Entregue</span>
                                    </div>
                                </td>
                                
                                <td>00000002</td>
                                <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                <td>20/05 às 18h00</td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="dot red">
                                        <span>Pendente</span>
                                    </div>
                                </td>
                                
                                <td>00000001</td>
                                <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                <td>20/05 às 18h00</td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </Main>

            <Footer />
        </Container>
    )
}