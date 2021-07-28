import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  return(
    <Modal 
      onRequestClose={onRequestClose} 
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={CloseImg} alt="close modal" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>
        
        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={IncomeImg} alt="entrada" />
            <span>Entrada</span>
          </button>

          <button type="button">
            <img src={OutcomeImg} alt="entrada" />
            <span>Saida</span>
          </button>

        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}