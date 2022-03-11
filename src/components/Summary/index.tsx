import { useContext, useState } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransacitonsContext';
import { Container } from "./styles";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);
    
    console.log(transactions);

    const summary = transactions.reduce((acc, transaction) => { 
        if (transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

        
    const [totalColor, setTotalColor] = useState('highlight-background')
    
    return(
        <Container>
        
        {/* <TransactionsContext.Consumer>
            {(data) => {
                console.log(data);
                
                return <p>ok</p> 
            }}
        </TransactionsContext.Consumer> */}
        
        
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>${summary.deposits}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>-${summary.withdraws}</strong>
            </div>
            <div id="teste" className={totalColor}>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{summary.total}</strong>
            </div>
        </Container>
    )
}