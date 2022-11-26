import ExpenseItem from "./ExpenseItem";
import expenseData from "./data.js";
import './Expenses.css'
import Card from "./Card";

function Expenses() {
  return (
    <Card className='expenses'>
      {expenseData.map((expense) => {
        return <ExpenseItem expense={expense} />;
      })}
    </Card>
  );
}

export default Expenses;
