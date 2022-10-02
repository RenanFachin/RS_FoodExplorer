// Import de estilizações
import { Container, Main, ButtonBack, Form, InputWrapper, TextArea, SectionIngredients, SendFormWithImage } from './styles'

// Import de componentes
import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { Error401 } from '../../components/Error401'

// Import de icones
import { IoIosArrowBack } from 'react-icons/io'
import { FiUpload } from 'react-icons/fi'

// Imports de hooks e api
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/authContext'
import { api } from '../../services/api'

export function AddDish(){
    const { user } = useAuth()
    const navigate = useNavigate()
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("");

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    const [imageFile, setImageFile] = useState(null);

    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("")
    }

    function handleRemoveIngredient(ingredientDeleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted))
    }

    async function handleNewDish(){

        // Validações
        if(!title){
            return alert("Dígite o título do prato")
        }
        
        if(!price){
            return alert("Adicione um preço ao prato")
        }

        if(!category){
            return alert("Adicione uma categoria ao prato")
        }

        if(!description){
            return alert("Adicione uma descrição para o prato que deseja adicionar ao cardápio")
        }


        if(newIngredient){
            return alert("Você deixou um ingrediente no campo para adicionar")
        }
        
        //  Acessando a api e utilizando o método de create de users
        //  api.post("/adminDishes", { title, description, price, category, ingredients })
        //  .then(()=>{
        //      alert("Prato criado com sucesso!")
        //      navigate("/")
        //  })
        //  .catch(error => {
        //      if(error.response){
        //          alert("Não foi possível cadastrar")
        //      }
        //  }) 

         //TESTE

        const formData = new FormData();
        formData.append("image", imageFile);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);

        ingredients.map(ingredient => (
            formData.append("ingredients", ingredient)
        ))

        api.post("/adminDishes", formData)
        alert("Prato cadastrado com sucesso");
        navigate("/")
    }

    return(
        
        <Container>
            <Header />

 
            {
            user.isAdmin ?
            <Main>
                <ButtonBack>
                    <Link to ='/'>
                        <IoIosArrowBack size={32} />
                        Voltar
                    </Link>

                    <h2>Adicionar prato</h2>
                </ButtonBack>

                

                <Form>
                    <InputWrapper>
                        <Input
                        label="name" 
                        title="Nome do prato" 
                        type="text" 
                        placeholder="Ex.: Salada Ceasar"
                        onChange={e => setTitle(e.target.value)}
                        />


                        <Input
                        label="name" 
                        title="Preço" 
                        type="text" 
                        placeholder="R$ 00,00"
                        onChange={e => setPrice(e.target.value)}
                        />

                        <Input
                        label="categoria" 
                        title="Categoria" 
                        type="text" 
                        placeholder="Categoria"
                        onChange={e => setCategory(e.target.value)}
                        />

                    </InputWrapper>

                    <SectionIngredients>
                        {
                        ingredients.map((ingredient, index) => (
                            <NoteItem 
                            key={String(index)}
                            value={ingredient}
                            onClick={() => handleRemoveIngredient(ingredient)}
                            />
                            ))
                        }

                        <NoteItem 
                        isNew 
                        placeholder='Adicionar'
                        onChange={e => setNewIngredient(e.target.value)}
                        value={newIngredient}
                        onClick={handleAddIngredient}
                        />

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
                                <input 
                                id="image" 
                                type="file" 
                                onChange={e => setImageFile(e.target.files[0])}
                                />
                            </div>
                        </label>
                        </div>
                    
                        <Button
                        className='addButton'
                        title="Adicionar pedido"
                        onClick={handleNewDish}
                        />
                    </SendFormWithImage>
                </Form>
            </Main>

            :

            <Error401 />
            }
            
            <Footer />
        </Container>
    )
}