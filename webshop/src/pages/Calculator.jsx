import LoanCalculator from "../components/LoanCalculator"
import RegularCalculator from "../components/RegularCalculator"

function Calculator() {
  return (
    <div>
      <RegularCalculator />
      <br /><br />
      <LoanCalculator />
    </div>
  )
}

export default Calculator