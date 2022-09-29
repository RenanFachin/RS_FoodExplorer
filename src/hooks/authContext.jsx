// Importando o contextAPI do react
import { createContext, useContext, useState } from "react";

// Importando a API
import { api } from '../services/api'

// Dentro do () de createContext vai o valor default
export const AuthContext = createContext({});

function AuthProvider({ children }){
    // Criando um state para salvar os dados
    const [data, setData] = useState({});


    async function signIn({email, password}){

        // Fazendo o login
        try{
            // Fazendo a requisição pro backEnd
            const responseAPI = await api.post('/sessions', {email, password})

            // Obtendo apenas o user e o token de dentro da resposta vindo do api
            const { user, token } = responseAPI.data

            // Inserindo o token no cabeçalho de todas as requisições
            api.defaults.headers.authorization = `Bearer ${token}`

            // Armazenando no state o usuário e seu token
            setData({user, token})

        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível fazer o login")
            }
        }
    }


    return (
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {/* o CHILDREN vai ser o Routes do main.jsx */}
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }