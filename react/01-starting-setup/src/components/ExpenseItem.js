import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseTitle = props.expense.title;
  const expenseAmount = props.expense.amount;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.expense.date}/>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
