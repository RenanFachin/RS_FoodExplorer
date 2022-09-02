import { Container } from './styles'

// export function Button({title}) e usar diretamente {title} dentro do container
export function Button(props){
    return(
        <Container type="button" disabled={props.loading}>
            {/* Entre {} para o react saber que é uma propriedade */}
            {/* {props.title} */}

            {/* If Ternário */}
            {props.loading ? 'Carregando...' : props.title }
        </Container>
    )
}