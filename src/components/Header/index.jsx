// Import de estilizações
import { Container, Content, Logo, Search, Profile, Logout} from './styles'

// import de componentes
import { HeaderButton } from '../../components/HeaderButton/'

// Import de icons
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogOut, FiUser } from 'react-icons/fi'
import { RiAdminLine } from 'react-icons/ri'

// Importando o hook de autenticação
import { useAuth } from '../../hooks/authContext'
import { useNavigate } from 'react-router-dom'

export function Header({search}){
    // acessando a função signOut do useAuth
    const { user, signOut } = useAuth()

    const navigate = useNavigate()

    function handleGoBack(){
        navigate("/")
    }

    function handleGoToProfilePage(){
        navigate("/profile")
    }

    function handleWrapperSignOut(){
        signOut()
        handleGoBack()
    }

    return(
        <Container>

        {
        !user.isAdmin ?
            <Content>
            <Logo to='/'>
                <svg width="30" height="36" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
                </svg>

                <h2>food explorer</h2>
            </Logo>

            <Search>
            {<AiOutlineSearch size={20}/>}
                <input 
                    placeholder = "Busque pelas opções de pratos"
                    type = "text"
                    onChange={e => {search(e.target.value)}}
                />
            </Search>

            <HeaderButton title="Meu pedido (0)"/>        

            <Profile onClick={handleGoToProfilePage}>
                <FiUser />
            </Profile>    

            <Logout onClick={handleWrapperSignOut}>
                <FiLogOut />
            </Logout>

            </Content>

        :

            <Content>
                <Logo to='/'>
                    <svg width="30" height="36" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
                    </svg>

                    <h2>food explorer</h2>
                </Logo>

                <div className='adm-header'>
                <Profile onClick={handleGoToProfilePage}>
                    <RiAdminLine />
                </Profile>    

                <Logout onClick={handleWrapperSignOut}>
                    <FiLogOut />
                </Logout>
                </div>


            </Content>
        }

        </Container>
    )
}