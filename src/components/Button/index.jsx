import { Container } from './styles'

// export function Button({title}) e usar diretamente {title} dentro do container
export function Button(props){
    return(
        <Container type="button">
            {/* Entre {} para o react saber que é uma propriedade */}
            {props.title}
        </Container>
    )
}