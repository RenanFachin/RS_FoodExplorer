// Import de estilizações
import { Container } from './styles'

export function IngredientCard({data}){

    const imagem = `../../../src/assets/Ingredientes/${data.title}.png`

    return(
        <Container>
            <div className='ingredients-wrapper'>
            <img 
            src={imagem} 
            alt=""
            />
                <span>{data.title}</span>
            </div>   
        </Container>
    )
}