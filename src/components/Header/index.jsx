import { Container, Content, Logo, Logout, Search } from './styles'

import { HeaderButton } from '../../components/HeaderButton/'

import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'


export function Header(){   
    return(
        <Container>
            <Content>
                <Logo>
                    <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0318 0.216515L43.4349 12.0919V35.8426L22.0318 47.7179L0.628698 35.8426V12.0919L22.0318 0.216515Z" fill="#065E7C"/>
                    </svg>
                    <h1>food explorer</h1>
                </Logo>

            <a href="#">
                Meus favoritos
            </a>


            <Search>
            {<AiOutlineSearch size={20}/>}
                <input 
                    placeholder = "Busque os pratos"
                    type = "text"
                />
            </Search>


            <HeaderButton 
                title="Meu pedido"
            />

            <Logout to="/">
                <FiLogOut />
            </Logout>

            </Content>
        </Container>
    )
}