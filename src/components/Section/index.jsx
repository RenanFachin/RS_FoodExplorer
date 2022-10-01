// Import de estilizações
import { Container, Slider } from './styles'

// Import de icones
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// Imports para o slider
import { useRef } from 'react';

export function Section({type, children}){
    const slider = useRef(null);

    function handleLeftClickSlider(event) {
        event.preventDefault();
    
        slider.current.scrollLeft -= slider.current.offsetWidth;
    }
    
    function handleRightClickSlider(event) {
        event.preventDefault();
    
        slider.current.scrollLeft += slider.current.offsetWidth;
    }

    return(
        <Container>
            <h2>
                {type}
            </h2>

            <Slider>
                <button 
                className='ArrowBack'
                onClick={handleLeftClickSlider}
                >
                    <IoIosArrowBack size={40}/>
                </button>

                <div ref={slider}>
                {children}
                </div>



                <button 
                className='ArrowForward'
                onClick={handleRightClickSlider}>
                    <IoIosArrowForward size={40}/>
                </button>
            </Slider>
        </Container>
    )
}