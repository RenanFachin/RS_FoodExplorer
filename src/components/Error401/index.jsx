// Import de estilização
import { Container } from './styles'

// Import de componentes
import { Button } from '../Button'

// Imports estratégicos
import { useNavigate } from 'react-router-dom'
import errorImg from '../../assets/ghost-img.png'


export function Error401(){

    const navigate = useNavigate()

    function handleGoBack(){
        navigate("/")
    }

    return(
        <Container>
            <img src={errorImg} alt="" />

            <div>
                <h4>Error 401</h4>
                <span>Oops!</span>
                <h3>Você não possui autorização para acessar está página!</h3>

                <Button 
                title={"Voltar"}
                onClick={handleGoBack}
                />
            </div>
        </Container>
    )
}