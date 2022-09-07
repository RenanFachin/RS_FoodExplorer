import { Container } from './styles'

import { Button } from '../Button/index'

import { BiMinus, BiPlus} from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

import { useState, useEffect } from 'react'

export function Card({title, description, price, ...rest}){
    const imagem = `../../../src/assets/Pratos/${title}.png`

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
        <Container>
            <button className='FavoriteDish'>
                <AiOutlineHeart />
            </button>

            <img src={imagem} alt="" />

            <h2>{title}</h2>
            <span>{description}</span>

            <h4>R$ {price}</h4>

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
                <Button title="incluir"/>
            </div>
        </Container>
    )    
}