import { Container, Content, Logo, Favorites, Search, Profile, Logout} from './styles'

import { HeaderButton } from '../../components/HeaderButton/'

// Impor de icons
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogOut, FiUser } from 'react-icons/fi'

// Importando o hook de autenticação
import { useAuth } from '../../hooks/authContext'

import { Link, useNavigate } from 'react-router-dom'

export function Header(){
    // acessando a função signOut do useAuth
    const { signOut } = useAuth()

    const navigate = useNavigate()

    function handleGoToProfilePage(){
        navigate("/profile")
    }

    return(
        <Container>
        <Content>
            <Logo to='/'>
                <svg width="30" height="36" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
                </svg>

                <h2>food explorer</h2>
            </Logo>

            {/* <Favorites> */}
                {/* <Link to='/OrderHistory'>Histórico de Pedidos</Link>  */}
                {/* <Link to='/profile'>Meu perfil</Link>  */}
            {/* </Favorites> */}

            <Search>
            {<AiOutlineSearch size={20}/>}
                <input 
                    placeholder = "Busque pelas opções de pratos"
                    type = "text"
                />
            </Search>

            <HeaderButton title="Meu pedido (0)"/>        

            <Profile onClick={handleGoToProfilePage}>
                <FiUser />
            </Profile>    

            <Logout onClick={signOut}>
                <FiLogOut />
            </Logout>

        </Content>
        </Container>
    )
}