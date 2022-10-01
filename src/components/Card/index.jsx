// Import de estilização
import { Container } from './styles'

// Import de componentes
import { Button } from '../Button/index'

// Import de Icons
import { BiMinus, BiPlus} from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'

// Imports estratégicos
import { useState } from 'react'
import { Link } from 'react-router-dom';


export function Card({data, ...rest}){
    const imagem = `../../../src/assets/Pratos/${data.title}.png`

    // Começando em 1 a quantidade
    const [quantity, setQuantity] = useState(1)

    function handleAddItem() {
        setQuantity (quantity+1)
    }

    function handleRemoveItem() {
        setQuantity (quantity-1)
        if(quantity == 1){
            setQuantity(1)
        }
    }

    return(
        <Container {...rest}>
            <button className='FavoriteDish' >
                <AiOutlineHeart />
            </button>

            <img 
            src={imagem} 
            alt=""
            />

            <Link to={`/details/${data.id}`}>
                <h2>{data.title}</h2>
            </Link>

            <span>{data.description}</span>

            <h4>R$ {data.price}</h4>

            <div className='AmountItemsAndBuy-wrapper'>
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

                </div>
                <Button 
                title="incluir"
                
                />
            </div>
        </Container>
    )    
}