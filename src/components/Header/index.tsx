import Logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={Logo} alt="dtmoney" />
        <button onClick={onOpenNewTransactionModal} type="button">Nova transação</button>
      </Content>
    </Container>
  )
}