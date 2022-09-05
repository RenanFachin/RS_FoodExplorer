import { Routes, Route } from 'react-router-dom'

// Importando as páginas que serão das rotas da aplicação
import { Home } from '../pages/Home'
/*

Falta por as outras páginas ainda 
 
*/

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            {/* Colocar os outros */}
        </Routes>
    )
}