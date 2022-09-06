import { Container, ButtonBack } from './styles'
import { Button } from '../Button/index'

import { BiMinus, BiPlus } from 'react-icons/bi'
import { IoIosArrowBack } from 'react-icons/io'


export function DetailsCard({title, description, price}){
    return(
        <Container>

        <ButtonBack to='/'>
            <IoIosArrowBack size={32}/>
            Voltar
        </ButtonBack>

            <img src="../../../src/assets/Pratos/1_SaladaRavanello.png" alt="Imagem do prato" />

            <div className='details'>
                <div className='details-wrapper'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className='ingredients'>
                    <div className='ingredients-wrapper'>
                        <img src="../../../src/assets/Ingredientes/alface.png" alt="" />
                        <span>alface</span>
                    </div>

                    <div className='ingredients-wrapper'>
                        <img src="../../../src/assets/Ingredientes/tomate.png" alt="" />
                        <span>tomate</span>
                    </div>

                    <div className='ingredients-wrapper'>
                        <img src="../../../src/assets/Ingredientes/rabanete.png" alt="" />
                        <span>rabanete</span>
                    </div>

                    <div className='ingredients-wrapper'>
                        <img src="../../../src/assets/Ingredientes/pngegg (4).png" alt="" />
                        <span>pão naan</span>
                    </div>
        
                </div>

                <div className='AmountItemsAndBuy-wrapper'>

                    <h4>R$ {price}</h4>

                    <div className='Amount'>
                        <button className='MinusItem'>
                            <BiMinus />
                        </button>

                        <span>01</span>
                    
                        <button className='PlusItem'>
                            <BiPlus />
                        </button>

                        <Button title="incluir"/>
                    </div>

                </div>

            </div>
        </Container>
    )
}