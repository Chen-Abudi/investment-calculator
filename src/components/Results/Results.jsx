import { calculateInvestmentResults, formatter } from "../../util/investment";
import "./Results.css";

function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);

  // Calculate the initial investment value
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  // Define an array for table headers
  const tableHeaders = [
    "Year",
    "Investment Value",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital",
  ];

  return (
    <table className="result">
      <thead className="result__thead">
        <tr className="result__table-title">
          {/* Mapping through the tableHeaders array to generate th elements */}
          {tableHeaders.map((header, index) => (
            <th key={index} className="result__table-header">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="result__tbody">
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
