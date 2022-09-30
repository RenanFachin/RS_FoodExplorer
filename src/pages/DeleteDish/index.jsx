import { Container, Main, ButtonBack, Form, InputWrapper, TextArea, SectionIngredients, SendFormWithImage } from './styles'

import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { FiUpload } from 'react-icons/fi'

import { useState } from 'react'
import { api } from '../../services/api'

export function DeleteDish(){

    const navigate = useNavigate()

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

    return(
        
        <Container>
            <Header />

            <Main>
                <Input 
                type="text" 
                onChange={(e)=> setIdDelItem(e.target.value)}
                />

                <Button 
                title="Deletar"
                onClick={handleRemoveItem}
                />
            </Main>

            <Footer />     
        </Container>
    )
}