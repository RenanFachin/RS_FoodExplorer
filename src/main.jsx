// importações padrões
import React from 'react'
import ReactDOM from 'react-dom/client'

// Utilizando os Estilos
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

// Importando contexto
import { AuthProvider } from './hooks/authContext'

// Utilizando a ROUTES
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
    <GlobalStyles/>

    <AuthProvider>

      <Routes />
      
    </AuthProvider>

    </ThemeProvider>
  </React.StrictMode>
)
