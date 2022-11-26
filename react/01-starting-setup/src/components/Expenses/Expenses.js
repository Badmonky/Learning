import ExpenseItem from "./ExpenseItem";
import expenseData from "../Data/ExpenseData";
import './Expenses.css'
import Card from "../UI/Card";

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
