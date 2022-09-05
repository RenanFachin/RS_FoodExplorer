import { Routes, Route } from 'react-router-dom'

// Importando as páginas que serão das rotas da aplicação
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
        </Routes>
    )
}