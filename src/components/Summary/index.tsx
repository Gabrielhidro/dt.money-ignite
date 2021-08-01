import { Container } from "./styles";
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary(){

  const data = useContext(TransactionsContext)

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="entradas" />
        </header>
        <strong>12000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={OutcomeImg} alt="saidas" />
        </header>
        <strong>- 500,00</strong>
      </div>

      <div className="highline-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="total" />
        </header>
        <strong>11500,00</strong>
      </div>
    </Container>
  )
}