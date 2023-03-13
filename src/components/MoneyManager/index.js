import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    historyList: [],
    title: '',
    amount: '',
    type: 'Income',
  }

  AddToHistory = event => {
    event.preventDefault()
    const {
      historyList,
      title,
      amount,
      type,
      balance,
      income,
      expenses,
    } = this.state
    const newHistoryItem = {
      id: v4(),
      title,
      amount,
      type,
    }
    if (title !== '' && amount !== '') {
      if (type === 'Income') {
        this.setState({
          balance: balance + parseInt(amount),
          income: income + parseInt(amount),
          expenses,
          historyList: [...historyList, newHistoryItem],
          title: '',
          amount: '',
          type,
        })
      } else {
        this.setState({
          balance: balance - parseInt(amount),
          income,
          expenses: expenses + parseInt(amount),
          historyList: [...historyList, newHistoryItem],
          title: '',
          amount: '',
          type,
        })
      }
    }
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onTypeChange = event => {
    this.setState({type: event.target.value})
  }

  onDeleteTransaction = id => {
    const {historyList, balance, income, expenses} = this.state
    const histItem = historyList.find(item => item.id === id)
    const newAmount = parseInt(histItem.amount)
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(item => item.id !== id),
      balance:
        histItem.type === 'Income' ? balance - newAmount : balance + newAmount,
      income: histItem.type === 'Income' ? income - newAmount : income,
      expenses: histItem.type === 'Income' ? expenses : expenses - newAmount,
    }))
  }

  render() {
    const {balance, income, expenses, historyList, title, amount} = this.state
    return (
      <div className="bg-container">
        <div className="manager-app">
          <div className="greetings-card">
            <h1 className="username">Hi, Richard</h1>
            <p className="greetings">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
          <div className="form-history-container">
            <form onSubmit={this.AddToHistory}>
              <h1 className="form-heading">Add Transaction</h1>
              <label htmlFor="title-input">TITLE</label>
              <br />
              <input
                type="text"
                onChange={this.onTitleChange}
                value={title}
                id="title-input"
                placeholder="TITLE"
              />
              <br />
              <label htmlFor="amount-input">AMOUNT</label>
              <br />
              <input
                type="text"
                onChange={this.onAmountChange}
                value={amount}
                id="amount-input"
                placeholder="AMOUNT"
              />
              <br />
              <label htmlFor="type-select">TYPE</label>
              <br />
              <select
                defaultValue="INCOME"
                onChange={this.onTypeChange}
                id="type-select"
              >
                {transactionTypeOptions.map(eachOpt => (
                  <option key={eachOpt.optionId} value={eachOpt.optionId}>
                    {eachOpt.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="form-heading">History</h1>
              <ul className="history-ul">
                <li className="history-li">
                  <p className="title column-heads">Title</p>
                  <p className="amount column-heads">Amount</p>
                  <p className="type column-heads">Type</p>
                </li>
                {historyList.map(histItem => (
                  <TransactionItem
                    key={histItem.id}
                    onDeleteTransaction={this.onDeleteTransaction}
                    transaction={histItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
