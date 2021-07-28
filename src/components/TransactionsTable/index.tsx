import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable(){
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data));
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">12.000</td>
            <td>Devs category</td>
            <td>20/02/21</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-2.000</td>
            <td>Casa</td>
            <td>20/02/21</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}