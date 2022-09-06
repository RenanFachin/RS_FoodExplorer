import { Container, Content, Logo, Favorites, Search, Logout } from './styles'

import { HeaderButton } from '../../components/HeaderButton/'

import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'

import {Link} from 'react-router-dom'


export function Header(){   
    return(
        <Container>
        <Content>
            <Logo to='/'>
                <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
                </svg>


                <h2>food explorer</h2>
            </Logo>

            <Favorites>
                <Link to='/OrderHistory'>Histórico de Pedidos</Link>
            </Favorites>

            <Search>
            {<AiOutlineSearch size={20}/>}
                <input 
                    placeholder = "Busque pelas opções de pratos"
                    type = "text"
                />
            </Search>

            <HeaderButton title="Meu pedido (0)"/>            

            <Logout>
                <FiLogOut />
            </Logout>
        </Content>
        </Container>
    )
}