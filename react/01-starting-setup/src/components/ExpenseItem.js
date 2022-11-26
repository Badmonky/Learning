import "./ExpenseItem.css";
// import expenses from "./expenses.js"

function ExpenseItem(props) {
  const expenseMonth = props.expense.date.toLocaleString("en-US", {
    month: "long",
  });
  const expenseDay = props.expense.date.toLocaleString("en-US", {
    day: "2-digit",
  });
  const expenseYear = props.expense.date.getFullYear();
  const expenseTitle = props.expense.title;
  const expenseAmount = props.expense.amount;

  return (
    <div className="expense-item">
      <div>
        <div>{expenseMonth}</div>
        <div>{expenseDay}</div>
        <div>{expenseYear}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
