// Importando o contextAPI do react
import { createContext, useContext, useState, useEffect } from "react";

// Importando a API
import { api } from '../services/api'

// Dentro do () de createContext vai o valor default
export const AuthContext = createContext({});

function AuthProvider({ children }){
    // Criando um state para salvar os dados
    const [data, setData] = useState({});

    // Logando
    async function signIn({email, password}){

        // Fazendo o login
        try{
            // Fazendo a requisição pro backEnd
            const responseAPI = await api.post('/sessions', {email, password})

            // Obtendo apenas o user e o token de dentro da resposta vindo do api
            const { user, token } = responseAPI.data

            // Armazenando no localStorage o usuário e o token
            // Localstorage só aceita textos e user é um objeto, então, é preciso converter -> JSON.stringify(user)
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token)

            // Inserindo o token no cabeçalho de todas as requisições
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

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

    // Deslogando
    function signOut(){
        // Deletando as infos que estão no localstorage
        localStorage.removeItem("@foodexplorer:token")
        localStorage.removeItem("@foodexplorer:user")

        // Voltando o state para vazio
        setData({})
    }

    useEffect(() => {
        // Buscando as informações que estão no localstorage
        const token = localStorage.getItem("@foodexplorer:token")
        const user = localStorage.getItem("@foodexplorer:user")

        // Caso token e user estejam armazenados no localstorage
        if(token && user){
            // Inserindo o token no cabeçalho de todas as requisições
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            // Armazenando no state o usuário e seu token
            setData({
                token,
                // Voltando o que estava em formato de texto no localstorage para formato de obj json
                user: JSON.parse(user)
            })
        }
    }, [])


    return (
        // Aqui iremos compartilhar a função de signIn, signOut e o usuário com todos os children(Rotas)
        <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
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