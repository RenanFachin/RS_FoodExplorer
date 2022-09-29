import { BrowserRouter } from "react-router-dom";

// Importando o hook de autenticação
import { useAuth } from '../hooks/authContext'

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
    // Pegando o dado do usuário de dentro do AuthContext.Provider
    const { user } = useAuth();
    
    // Se o user existir, quer dizer que ele pode logar e será redirecionado para as rotas da aplicação
    // Caso contrário, será mantido na rota de auth

    return(
        <BrowserRouter>
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}