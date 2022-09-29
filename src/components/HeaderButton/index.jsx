import { Container } from './styles'
import { TbReceipt } from 'react-icons/tb'

export function HeaderButton({title, ...rest}){
    return(
        <Container to='/orderpage' {...rest} >
            <TbReceipt />
            {title}
        </Container>
    )
}