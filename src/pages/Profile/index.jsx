// Estilos
import { Container, Main, Form, Avatar } from './styles'
import avatarPlaceholder from '../../../src/assets/svg/avatar.svg'

// Componentes
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { InputProfile }  from '../../components/InputProfile'

// Navegação, states e effect
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/authContext'

import { api } from '../../services/api'

// Icons
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

export function Profile(){
    
    const navigate = useNavigate()

    // Preenchendo o state com o valor do banco de dados
    // Acessando o usuário
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/avatarFiles/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState("null")

    async function handleUpdate(){
        // Criando um objeto user para receber as novas informações
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        await updateProfile({ user, avatarFile })
    }

    function handleChangeAvatar(event){
        // Pegando o arquivo do evento
        const file = event.target.files[0]

        setAvatarFile(file);

        // exibindo o novo avatar
        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    function handleGoToOrderHistoryPage(){
        navigate("/OrderHistory")
    }

    return(
        <Container>
            <Header />

            <Main>
                <section className='profile-card'>
                    <Form>
                        
                        <Avatar>
                            <img 
                            src={avatar} 
                            alt="Foto do usuário" 
                            />

                            <label htmlFor="avatar">
                                <FiCamera />

                                <input
                                    id="avatar"
                                    type="file"
                                    onChange={handleChangeAvatar}
                                />
                            </label>
                        </Avatar>

                        <InputProfile 
                        placeholder="Nome"
                        type="text"
                        icon={FiUser}
                        value={name}
                        onChange={e=> setName(e.target.value)}
                        />

                        <InputProfile 
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                        />

                        <InputProfile 
                        placeholder="Senha atual"
                        type="password"
                        icon={FiLock}
                        onChange={e=> setPasswordOld(e.target.value)}
                        />

                        <InputProfile 
                        placeholder="Nova senha"
                        type="password"
                        icon={FiLock}
                        onChange={e=> setPasswordNew(e.target.value)}
                        />

                        <Button
                        title="Salvar alterações"
                        onClick={handleUpdate}
                        />

                    </Form>
                </section>

                <section className='profile-option'>

                    <div className='logo-icon'>
                        <svg width="120" height="120" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
                        </svg>
                    </div>

                        <Button 
                        title={"Histórico de pedidos"}
                        onClick={handleGoToOrderHistoryPage}
                        />
                        <Button title={"Pratos favoritos"}/>
                        <Button title={"Fale conosco"}/>
                </section>
            </Main>

        </Container>
    )
}