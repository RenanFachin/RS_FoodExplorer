import { Container } from './styles'

// export function Button({title}) e usar diretamente {title} dentro do container
export function Button({title, ...rest}){
    return(
        <Container type="button" {...rest} >
            {title}
        </Container>
    )
}