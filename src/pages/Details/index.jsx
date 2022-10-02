// Import de estilizações
import { Container, Main, ButtonBack, AllIngredientCards, Content } from './style';

// Import de componentes
import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { Button } from '../../components/Button/'
import { IngredientCard } from '../../components/IngredientCard/'

// Import de icones
import { IoIosArrowBack } from 'react-icons/io'
import { BiMinus, BiPlus } from 'react-icons/bi'

// Import de hooks e api
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/authContext';

// Import de database p/ teste
import { itemsDatabase } from '../../utils/database'

export function Details(){
        // Começando em 1 a quantidade
        const [quantity, setQuantity] = useState(1)
        const [data, setData] = useState(null)

        const params = useParams()
        const navigate = useNavigate()
        const { user } = useAuth()

        
        // console.log(data)
        const imageURL = data && `${api.defaults.baseURL}/files/dishFiles/${data.image}`
        
        function handleAddItem() {
            setQuantity (quantity+1)
        }
        
        function handleRemoveItem() {
            setQuantity (quantity-1)
            if(quantity == 1){
                setQuantity(1)
            }
        }

        async function handleDeleteDish(){
            const confirm = window.confirm("Deseja realmente deletar o prato do cardápio?")
        
            if(confirm){
                await api.delete(`/adminDishes/${data.id}`)
                navigate(-1)
            }
        }

        function handleGoToEditPage(){
            navigate(`/edit/${data.id}`)
        }

        useEffect(() => {
            async function fetchDish(){
                const responseAPI = await api.get(`/dishes/${params.id}`)
                setData(responseAPI.data)
            }

            fetchDish()
        }, [])

    return(
        <Container>
            <Header />

            {
            data &&
            <Main>

            <ButtonBack>
                    <Link to ='/'>
                        <IoIosArrowBack size={32} />
                        Voltar
                    </Link>
            </ButtonBack>
            
            
            <Content>
            <img src={imageURL} alt="Imagem do prato" />

            <div className='details'>
                <div className='details-wrapper'>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            

                <AllIngredientCards>
                {
                data.ingredients.map ((ingredient) => (
                    <IngredientCard 
                    key={String(ingredient.id)}
                    ingredient={ingredient.name}
                    />
                ))
                }
                </AllIngredientCards>
                


                <div className='AmountItemsAndBuy-wrapper'>

                    <h4>R$ {data.price}</h4>

                    {
                    !user.isAdmin ?
                    <div className='Amount'>
                        <button 
                        className='MinusItem'
                        onClick={handleRemoveItem}
                        >
                            <BiMinus />
                        </button>

                        <span>0{quantity}</span>
                    
                        <button 
                        className='PlusItem'
                        onClick={handleAddItem}
                        >
                            <BiPlus />
                        </button>

                        <Button title="incluir"/>
                    </div>

                    :

                    <div className='Amount'>
                        <Button title="Deletar" onClick={handleDeleteDish} />
                        <Button title="Editar" onClick={handleGoToEditPage} />
                    </div>
                    }

                </div>

            </div>

            </Content>
            

            </Main>
            }

            <Footer />
        </Container>
    )
}