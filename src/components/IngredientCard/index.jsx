// Import de estilizações
import { Container } from './styles'

import alface from '../../assets/Ingredientes/alface.png'
import ameixa from '../../assets/Ingredientes/ameixa.png'
import amendoas from '../../assets/Ingredientes/amêndoas.png'
import aniz from '../../assets/Ingredientes/Aniz.png'
import cafe from '../../assets/Ingredientes/café.png'
import camarao from '../../assets/Ingredientes/camarao.png'
import canela from '../../assets/Ingredientes/canela.png'
import claras from '../../assets/Ingredientes/claras.png'
import damasco from '../../assets/Ingredientes/damasco.png'
import farinha from '../../assets/Ingredientes/farinha.png'
import limao from '../../assets/Ingredientes/limão.png'
import maçã from '../../assets/Ingredientes/maçã.png'
import maracuja from '../../assets/Ingredientes/maracuja.png'
import massa from '../../assets/Ingredientes/massa.png'
import paoNaan from '../../assets/Ingredientes/Pao Naan.png'
import pao from '../../assets/Ingredientes/pao.png'
import pepino from '../../assets/Ingredientes/pepino.png'
import pessego from '../../assets/Ingredientes/pêssego.png'
import pesto from '../../assets/Ingredientes/pesto.png'
import presunto from '../../assets/Ingredientes/presunto.png'
import rabanete from '../../assets/Ingredientes/rabanete.png'
import rucula from '../../assets/Ingredientes/rúcula.png'
import tomate from '../../assets/Ingredientes/tomate.png'
import whiskey from '../../assets/Ingredientes/whiskey.png'

import defaultImage from '../../assets/Ingredientes/defaultIngredientImage.png'

export function IngredientCard({ingredient}){

    function fetchImageIngreedient(name){
        // fazendo a troca de de acentuação, espaçõs e tudo para minusculo
        let ingredient = name.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let result

        switch(ingredient){
            case "canela":
                return result = canela
            case "maca":
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
            case "farinha":
                return result = farinha
            case "pessego":
                return result = pessego
            case "amendoas":
                return result = amendoas
            case "claras":
                return result = claras
            case "ameixa":
                return result = ameixa
            case "damasco":
                return result = damasco
            case "maracuja":
                return result = maracuja
            case "cafe":
                return result = cafe
            case "aniz":
                return result = aniz
            case "limao":
                return result = limao 
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