import { Container, Slider } from './styles'

import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import {Card} from '../Card/'


export function Section({title}){

    return(
        <Container>
            <h2>
                {title}
            </h2>

            <Slider>
                <button 
                className='ArrowBack'
                >
                    <IoIosArrowBack size={40}/>
                </button>

                <div>
                <Card
                />
                </div>



                <button className='ArrowForward'>
                    <IoIosArrowForward size={40}/>
                </button>
            </Slider>
        </Container>
    )
}