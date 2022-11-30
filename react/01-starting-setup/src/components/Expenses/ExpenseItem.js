import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const expenseTitle = props.expense.title;
  const expenseAmount = props.expense.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date}/>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      {/* <button className="btn btn-blue" onClick={clickHandler} >Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
