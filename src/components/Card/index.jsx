import { Container } from './styles'

import { Button } from '../Button/index'

import { BiMinus, BiPlus} from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export function Card(){

    return(
        <Container>
            <button className='FavoriteDish'>
                <AiOutlineHeart />
            </button>

            <img src="../../../src/assets/Pratos/SaladaRavanello.png" alt="" />

            <h2>Salava Ravanello</h2>
            <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>

            <h4>R$ 49,97</h4>

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