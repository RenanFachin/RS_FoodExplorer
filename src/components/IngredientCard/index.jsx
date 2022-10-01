// Import de estilizações
import { Container } from './styles'

import canela from '../../assets/Ingredientes/canela.png'
import maçã from '../../assets/Ingredientes/maçã.png'
import whiskey from '../../assets/Ingredientes/whiskey.png'

export function IngredientCard({ingredient}){

    function fetchImageIngreedient(name){
        let ingredient = name.toLowerCase().trim()

        let result

        switch(ingredient){
            case "canela":
                return result = canela
            case "maçã":
                return result = maçã
            case "whiskey":
                return result = whiskey
        }
        
    }

    let result = fetchImageIngreedient(ingredient)

    return(
        <Container>
            <div className='ingredients-wrapper'>
            <img 
            src={result} 
            alt=""
            />
                <span>{ingredient}</span>
            </div>   
        </Container>
    )
}