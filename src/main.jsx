// importações padrões
import React from 'react'
import ReactDOM from 'react-dom/client'

// Utilizando os Estilos
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

// Importando a página que será renderizada na #root
// import { Home } from './pages/Home/'

// Utilizando a ROUTES
import { Routes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
    <GlobalStyles/>

    {/* <Home /> */}
    <Routes />
    
    </ThemeProvider>
  </React.StrictMode>
)
