import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';

export function App() {
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <GlobalStyles />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal onRequestClose={handleCloseNewTransactionModal} isOpen={isNewTransactionModalOpen}>
        <h1>Modal</h1>
      </Modal>
    </>
  );
}
