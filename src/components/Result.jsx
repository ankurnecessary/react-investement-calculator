import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";

export default function Result({ input }) {
  const investmentData = calculateInvestmentResults(input);
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {investmentData.map(
          ({
            year,
            interest,
            valueEndOfYear,
            annualInvestment,
            totalInterest,
          }) => {
            return (
              <tr key={year}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(valueEndOfYear - totalInterest)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}
