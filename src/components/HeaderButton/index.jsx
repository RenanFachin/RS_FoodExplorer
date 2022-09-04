import { Container } from './styles'
import { TbReceipt } from 'react-icons/tb'

export function HeaderButton({title}){
    return(
        <Container>
            <TbReceipt />
            {title}
        </Container>
    )
}