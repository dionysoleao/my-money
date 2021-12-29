import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./styles"
import { useTransactions } from "../../hooks/useTransactions";
export function Summary(){

    const {transactions} = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else{
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }
        return acc
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0,
    });

    return  (
        <Container>
        <div>
            <header>
                <span>Entradas</span>
                <img src={incomeImg} alt="Entradas" />
            </header>
            <strong>{new Intl.NumberFormat('pt-br', {
                                    style:'currency',
                                    currency: 'BRL'
                                }).format(summary.deposits)}</strong>       
        </div>
        <div>
            <header>
                <span>Saídas</span>
                <img src={outcomeImg} alt="Saídas" />
            </header>
            <strong>- {new Intl.NumberFormat('pt-br', {
                                    style:'currency',
                                    currency: 'BRL'
                                }).format(summary.withdraw)}</strong>       
        </div>
        <div className="highlight-background">
            <header>
                <span>Total</span>
                <img src={totalImg} alt="Total" />
            </header>
            <strong>{new Intl.NumberFormat('pt-br', {
                                    style:'currency',
                                    currency: 'BRL'
                                }).format(summary.total)}</strong>       
        </div>
        </Container>
    )
}