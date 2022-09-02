import { Container } from './styles'

// Importanto componentes que serão utilizados na estrutura da página SignIn
import {Button} from '../../components/Button/'
import {AddButton} from '../../components/AddButton/'

export function SignIn() {
  return (
    <Container>
      <h1>Olá mundo</h1>

      <Button
      title="Entrar"
      loading
      />

      <Button
      title="Criar conta"
      />

      <AddButton />
      
    </Container>
  )
}

