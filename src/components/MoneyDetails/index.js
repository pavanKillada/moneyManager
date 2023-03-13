// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-details-container">
      <div className="balance-card">
        <div className="balance-card-img-container">
          <img
            className="balance-card-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div className="money-card-details">
          <p>Your Balance</p>
          <p data-testid="balanceAmount" className="money">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-card">
        <div className="income-card-img-container">
          <img
            className="income-card-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div className="money-card-details">
          <p>Your Income</p>
          <p data-testid="incomeAmount" className="money">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-card">
        <div className="expenses-card-img-container">
          <img
            className="expenses-card-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div className="money-card-details">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount" className="money">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
