// Import de estilizações
import { Container } from './styles'

import canela from '../../assets/Ingredientes/canela.png'
import maçã from '../../assets/Ingredientes/maçã.png'
import whiskey from '../../assets/Ingredientes/whiskey.png'
import alface from '../../assets/Ingredientes/alface.png'
import paoNaan from '../../assets/Ingredientes/Pao Naan.png'
import rabanete from '../../assets/Ingredientes/rabanete.png'
import tomate from '../../assets/Ingredientes/tomate.png'
import pao from '../../assets/Ingredientes/pao.png'
import presunto from '../../assets/Ingredientes/presunto.png'
import rucula from '../../assets/Ingredientes/rúcula.png'
import camarao from '../../assets/Ingredientes/camarao.png'
import massa from '../../assets/Ingredientes/massa.png'
import pesto from '../../assets/Ingredientes/pesto.png'
import pepino from '../../assets/Ingredientes/pepino.png'

import defaultImage from '../../assets/Ingredientes/defaultIngredientImage.png'

export function IngredientCard({ingredient}){

    function fetchImageIngreedient(name){
        // fazendo a troca de de acentuação, espaçõs e tudo para minusculo
        let ingredient = name.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        let result

        switch(ingredient){
            case "canela":
                return result = canela
            case "maçã":
                return result = maçã
            case "whiskey":
                return result = whiskey
            case "alface":
                return result = alface
            case "pao naan":
                return result = paoNaan
            case "rabanete":
                return result = rabanete
            case "tomate":
                return result = tomate
            case "pao":
                return result = pao
            case "presunto":
                return result = presunto
            case "rucula":
                return result = rucula
            case "camarao":
                return result = camarao
            case "massa":
                return result = massa
            case "pesto":
                return result = pesto
            case "pepino":
                return result = pepino
            default:
                return result = defaultImage
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