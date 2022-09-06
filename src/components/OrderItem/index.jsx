import { Container } from './styles'

export function OrderItem({qntd, title, price}){
    let imagem = `../../../src/assets/Pratos/${title}.png`

    // Atribui em totalPrice o valor de quantidade * o preço prato
    let totalPrice = qntd * price

    return(
        <Container>

        <img 
            src={imagem}
            alt="Foto do prato"
        />

        <div className='orderDetails'>

            <div className='details'>
                <h3>{qntd} x {title}</h3>

                <span>
                    R$ {totalPrice}
                </span>
            </div>

            <button className='deleteButton'>
                Excluir
            </button>

        </div>


        </Container>
    )
}