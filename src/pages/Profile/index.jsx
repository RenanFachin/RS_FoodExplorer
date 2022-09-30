import { Container, Main } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import { useNavigate } from 'react-router-dom'

export function Profile(){
    
    const navigate = useNavigate()

    function handleGoToOrderHistoryPage(){
        navigate("/OrderHistory")
    }

    return(
        <Container>
            <Header />

            <Main>
                <section className='profile-card'>

                </section>

                <section className='profile-option'>

                    <div className='logo-icon'>
                        <svg width="120" height="120" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
                        </svg>
                    </div>

                        <Button 
                        title={"Histórico de pedidos"}
                        onClick={handleGoToOrderHistoryPage}
                        />
                        <Button title={"Pratos favoritos"}/>
                        <Button title={"Fale conosco"}/>
                </section>
            </Main>
        </Container>
    )
}