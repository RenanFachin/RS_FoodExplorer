import { Container, Main, ButtonBack, Content } from './style';

import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { Button } from '../../components/Button/'

import {IoIosArrowBack} from 'react-icons/io'
import { BiMinus, BiPlus } from 'react-icons/bi'

import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'


import { itemsDatabase } from '../../utils/database'



export function Details(){
        // Começando em 1 a quantidade
        const [quantity, setQuantity] = useState(1)

        const { id } = useParams(); // Buscando o que ta na url
        const data = itemsDatabase.find((item) => item.id === Number(id));

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
            <Header />


            <Main>

            <ButtonBack>
                    <Link to ='/'>
                        <IoIosArrowBack size={32} />
                        Voltar
                    </Link>
            </ButtonBack>
            

            <Content>
            <img src={data.image} alt="Imagem do prato" />

            <div className='details'>
                <div className='details-wrapper'>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>


                {/* REFAZER */}
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

                    <h4>R$ {data.price}</h4>

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

                </div>

            </div>

            </Content>

            </Main>


            <Footer />
        </Container>
    )
}