import { Routes, Route } from 'react-router-dom'

// Importando as páginas que serão das rotas da aplicação
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { OrderHistory } from '../pages/OrderHistory'
import { OrderPage } from '../pages/OrderPage'
/*

Falta por as outras páginas ainda 
 
*/

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/orderpage" element={<OrderPage />} />
            {/* Colocar os outros */}
        </Routes>
    )
}