import { Container } from './styles';

export function Input({label, title, icon: Icon, ...rest}){
    return(
        <Container>
            <label htmlFor="{label}">
                {title}
            </label>

            {Icon && <Icon  size={20} />}
            <input id={label} {...rest} />
        </Container>
    )
}