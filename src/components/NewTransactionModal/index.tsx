import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const { createTransaction } = useContext(TransactionsContext)

  const [ type, setType ] = useState('deposit')
  const [ title, setTitle ] = useState('')
  const [ amount, setAmount ] = useState(0)
  const [ category, setCategory ] = useState('')

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()

    createTransaction({
      title,
      amount,
      category,
      type,
    })
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        
        <input type="text" placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />

        <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))}/>

        <TransactionTypeContainer>
          <RadioBox 
            type="button" 
            onClick={() => setType('deposit')} 
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={IncomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button" 
            onClick={() => setType('withdraw')} 
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={OutcomeImg} alt="entrada" />
            <span>Saida</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}