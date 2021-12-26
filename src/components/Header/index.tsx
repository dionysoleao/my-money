
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal}:HeaderProps){

    return(
        <Container>
            <Content>
            <h2>my money</h2>
            <button onClick={onOpenNewTransactionModal} type="button">Nova Transação</button>
            </Content>
        </Container>
    )
}