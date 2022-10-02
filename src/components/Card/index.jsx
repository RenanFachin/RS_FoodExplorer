// Import de estilização
import { Container } from './styles'

// Import de componentes
import { Button } from '../Button'

// Import de Icons
import { BiMinus, BiPlus} from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'

// Imports estratégicos
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/authContext'
import { api } from '../../services/api'


export function Card({data, ...rest}){
    // const imagem = `../../../src/assets/Pratos/${data.title}.png`
    const imageURL = `${api.defaults.baseURL}/files/dishFiles/${data.image}`;

    const navigate = useNavigate()
    const { user } = useAuth()

    // Começando em 1 a quantidade
    const [quantity, setQuantity] = useState(1)

    function handleRefreshPage(){
        navigate(0)
    }

    function handleAddItem() {
        const limitOfSameItemsInCart = quantity >= 15

        if(limitOfSameItemsInCart){
            return alert("Ei, você está ultrapassando o limite de um mesmo item em um pedido")
        }

        setQuantity (quantity+1)
    }

    function handleRemoveItem() {
        setQuantity (quantity-1)

        if(quantity == 1){
            setQuantity(1)
        }
    }

    function handleGoToEditPage(){
        navigate(`/edit/${data.id}`)
    }

    async function handleDeleteItem(){
        const confirm = window.confirm("Deseja realmente deletar o prato do cardápio?")
    
        if(confirm){
            await api.delete(`/adminDishes/${data.id}`)
            handleRefreshPage()
        }
    }


    return(
        <Container {...rest}>
            {
            ! user.isAdmin ?
            <button className='FavoriteDish' >
                <AiOutlineHeart />
            </button>

            : 

            <div />
            }

            <img 
            src={imageURL} 
            alt=""
            />

            <Link to={`/details/${data.id}`}>
                <h2>{data.title}</h2>
            </Link>

            <span>{data.description}</span>

            <h4>R$ {data.price}</h4>


            {
            !user.isAdmin ?
            <div className='AmountItemsAndBuy-wrapper'>
                <div className='Amount'>
                    <button 
                    className='MinusItem'
                    onClick={handleRemoveItem}
                    >
                        <BiMinus />
                    </button>

                    <span>
                        {quantity<10 ? `0${quantity}` : quantity}
                    </span>
                    
                    <button 
                    className='PlusItem'
                    onClick={handleAddItem}
                    >
                        <BiPlus />
                    </button>

                </div>
                <Button 
                title="incluir"
                
                />
            </div>

            :

            <div className='admItensController'>
                <Button 
                title="Deletar"
                onClick={handleDeleteItem}
                />

                <Button 
                title="editar"
                onClick={handleGoToEditPage}
                />
            </div>
            }
        </Container>
    )    
}