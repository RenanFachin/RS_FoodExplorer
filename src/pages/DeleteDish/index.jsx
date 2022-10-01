import { Container, Main } from './styles'

import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Error401 } from '../../components/Error401'

import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/authContext'

export function DeleteDish(){
    const {user} = useAuth()
    const navigate = useNavigate()

    const [dish, setDish] = useState([])
    const [idDelItem, setIdDelItem] = useState("")

    function handleBack(){
        navigate("/")
    }

    async function handleRemoveItem(){
        const confirm = window.confirm("Deseja realmente deletar o prato do cardápio?")

        if(confirm){
            await api.delete(`/adminDishes/${idDelItem}`)
            handleBack()
        }

    }

    useEffect(()=>{
        async function fetchNameDish(){
            const ApiResponse = await api.get(`/dishes/${idDelItem}`)
            setDish(ApiResponse.data)
        }

        fetchNameDish()
    }, [idDelItem])

    return(
        
        <Container>
            <Header />

            {
            user.isAdmin ?
            <Main>
                <h2>
                    O id que você digitou é referente ao prato <span>{dish.title}</span>
                </h2>

                <Input 
                type="text" 
                onChange={(e)=> setIdDelItem(e.target.value)}
                />

                <Button 
                title="Deletar"
                onClick={handleRemoveItem}
                />
            </Main>

            :

            <Error401 />

            }

            <Footer />     
        </Container>
    )
}