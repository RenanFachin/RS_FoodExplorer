// Import de estilizações
import { Container } from './styles'

// Import de icones
import { TbReceipt } from 'react-icons/tb'

export function HeaderButton({title, ...rest}){
    return(
        <Container to='/orderpage' {...rest} >
            <TbReceipt />
            {title}
        </Container>
    )
}