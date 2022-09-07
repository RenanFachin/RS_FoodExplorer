import { Container, Slider } from './styles'
import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import { useRef } from 'react';

export function Section({title, children}){
    const slider = useRef(null);

    function handleLeftClick(e) {
        e.preventDefault();
    
        slider.current.scrollLeft -= slider.current.offsetWidth;
      }
    
      function handleRightClick(e) {
        e.preventDefault();
    
        slider.current.scrollLeft += slider.current.offsetWidth;
      }

    return(
        <Container>
            <h2>
                {title}
            </h2>

            <Slider>
                <button 
                className='ArrowBack'
                onClick={handleLeftClick}
                >
                    <IoIosArrowBack size={40}/>
                </button>

                <div ref={slider}>
                {children}
                </div>



                <button 
                className='ArrowForward'
                onClick={handleRightClick}>
                    <IoIosArrowForward size={40}/>
                </button>
            </Slider>
        </Container>
    )
}