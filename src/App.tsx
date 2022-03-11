import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext, TransactionsProvider } from "./TransacitonsContext";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
    function handleOpenTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
  
  return (
    <TransactionsProvider>
      <GlobalStyle/>
      <Header onOpenNewTransactionModal ={handleOpenTransactionModal} />
      
      <NewTransactionModal 
      isOpen = {isNewTransactionModalOpen}
      onRequestClose = {handleCloseTransactionModal}
      />
      
      <Dashboard/>
    </TransactionsProvider>
  );
}


