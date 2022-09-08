import { Container, Main, ButtonBack, Form } from './styles'

import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

export function Edit(){
    return(
        <Container>
            <Header />

 

            <Main>
                <ButtonBack>
                    <Link to ='/'>
                        <IoIosArrowBack size={32} />
                        Voltar
                    </Link>

                    <h2>Editar prato</h2>
                </ButtonBack>

                

                <Form>

                </Form>

            </Main>

            <Footer />
        </Container>
    )
}