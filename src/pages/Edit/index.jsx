import { Container, Main, ButtonBack, Form, InputWrapper, TextArea, SectionIngredients, SendFormWithImage } from './styles'

import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { FiUpload } from 'react-icons/fi'

import { useState } from 'react'

export function Edit(){
    const [imageFile, setImageFile] = useState(null);
    const [description, setDescription] = useState("");

    return(
        
        <Container>
            <Header />

 

            <Main>
                <ButtonBack>
                    <Link to ='/'>
                        <IoIosArrowBack size={32} />
                        Voltar
                    </Link>

                    <h2>Editar prato</h2>
                </ButtonBack>

                

                <Form>
                    <InputWrapper>
                        <Input
                        label="name" 
                        title="Nome do prato" 
                        type="text" 
                        placeholder="Ex.: Salada Ceasar"
                        />


                        <Input
                        label="name" 
                        title="Preço" 
                        type="text" 
                        placeholder="R$ 00,00"
                        />

                    </InputWrapper>

                    <SectionIngredients>
                        <NoteItem value="Alface"/>
                        <NoteItem value="Tomate"/>
                        <NoteItem value="Tomate"/>
                        <NoteItem isNew placeholder='Adicionar'/>
                        <NoteItem isNew placeholder='Adicionar'/>
                        <NoteItem isNew placeholder='Adicionar'/>
                    </SectionIngredients>

                    <TextArea>
                        <label htmlFor="">Descrição</label>
                        <textarea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setDescription(e.target.value)}
                        >
                        </textarea>
                    </TextArea>      


                    <SendFormWithImage>
                        <div className='uploadImage'>
                        <label id="file" htmlFor="image">
                            Imagem do prato
                            <div className='uploadImageSelect'>
                                <FiUpload size={24}/>
                                <span>Selecione a imagem</span>
                                <input id="image" type="file" onChange={e => setImageFile(e.target.files[0])}/>
                            </div>
                        </label>
                        </div>
                    
                        <Button
                        className='addButton'
                        title="Adicionar pedido"
                        />
                    </SendFormWithImage>
                        
                </Form>
            </Main>

            <Footer />
        </Container>
    )
}