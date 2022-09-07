import { Container } from './styles'

import { Button } from '../Button/index'

import { BiMinus, BiPlus} from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export function Card({title, description, price, ...rest}){
    const imagem = `../../../src/assets/Pratos/${title}.png`

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
                    <button className='MinusItem'>
                        <BiMinus />
                    </button>

                    <span>01</span>
                    
                    <button className='PlusItem'>
                        <BiPlus />
                    </button>

                </div>
                <Button title="incluir"/>
            </div>
        </Container>
    )    
}