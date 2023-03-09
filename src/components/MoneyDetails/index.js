// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-details-container">
      <div data-testid="balanceAmount" className="balance-card">
        <div className="balance-card-img-container">
          <img
            className="balance-card-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div className="money-card-details">
          <p>Your Balance</p>
          <h1 className="money">Rs {balance}</h1>
        </div>
      </div>
      <div data-testid="incomeAmount" className="income-card">
        <div className="income-card-img-container">
          <img
            className="income-card-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div className="money-card-details">
          <p>Your Income</p>
          <h1 className="money">Rs {income}</h1>
        </div>
      </div>
      <div data-testid="expensesAmount" className="expenses-card">
        <div className="expenses-card-img-container">
          <img
            className="expenses-card-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div className="money-card-details">
          <p>Your Expenses</p>
          <h1 className="money">Rs {expenses}</h1>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
