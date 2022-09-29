import { Container, Form } from './styles'

// Importanto componentes que serão utilizados na estrutura da página SignIn
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

export function SignIn() {

  return (
    <Container>

    <div>
      <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.0318 0.216515L43.4349 12.0919V35.8426L22.0318 47.7179L0.628698 35.8426V12.0919L22.0318 0.216515Z" fill="#065E7C"/>
      </svg>

      <h1>food explorer</h1>
    </div>

      <Form>

      <h2>Faça login</h2>

      <Input 
      title="Email"
      type="email" 
      label="email"
      placeholder = "exemplo@exemplo.com.br" 
      required
      />

      <Input 
      title="Senha"
      label="password"
      type="password" 
      placeholder = "No mínimo 6 caracteres"
      minLength = "6" 
      required 
      />

      <Button title="Entrar"/>
        
      <Link to='/register'>
        Criar uma conta
      </Link>

      </Form>
      
    </Container>
  )
}

