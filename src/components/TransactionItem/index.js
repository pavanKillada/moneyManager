// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, onDeleteTransaction} = props
  const {id, title, amount, type} = transaction
  const onDelete = () => {
    onDeleteTransaction(id)
  }
  return (
    <li className="history-li">
      <p className="title">{title}</p>
      <p className="amount">Rs {amount}</p>
      <div className="type type-delete-container">
        <p>{type[0] + type.slice(1).toLowerCase()}</p>
        <button
          className="delete-btn"
          onClick={onDelete}
          type="button"
          data-testid="delete"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
