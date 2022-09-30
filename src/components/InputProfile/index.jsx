// importando o elemento Container(que possui as estilizações)
import { Container } from './styles';

// Exportando o componente INPUT() para ser utilizado fora
// ìcon: Icon transformando icon para Icon
// Nem todo input terá icone do lado... então, devemos verificar a existencia {Icon && <Icon />}, só vai mostrar o icone se, de fato, existir um ícone a ser mostrado (&&) 
export function InputProfile({icon: Icon, ...rest}){
    return(
        <Container>
            {Icon && <Icon  size={20} />}
            <input {...rest} />
        </Container>
    )
}