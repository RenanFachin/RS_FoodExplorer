import { Routes, Route } from 'react-router-dom'

// Importando as páginas que serão das rotas da aplicação
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
/*

Falta por as outras páginas ainda 
 
*/

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            {/* Colocar os outros */}
        </Routes>
    )
}