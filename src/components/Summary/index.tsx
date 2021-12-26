import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext';


import { Container } from "./styles"
export function Summary(){

    const {transactions} = useContext(TransactionsContext)
    console.log({transactions})
    return  (
        <Container>
        <div>
            <header>
                <a>Entradas</a>
                <img src={incomeImg} alt="Entradas" />
            </header>
            <strong>R$ 1000,00</strong>       
        </div>
        <div>
            <header>
                <a>Saídas</a>
                <img src={outcomeImg} alt="Saídas" />
            </header>
            <strong>- R$ 500,00</strong>       
        </div>
        <div className="highlight-background">
            <header>
                <a>Total</a>
                <img src={totalImg} alt="Total" />
            </header>
            <strong>R$ 500,00</strong>       
        </div>
        </Container>
    )
}