import ExpenseItem from "./ExpenseItem";
import expenseData from "./data.js";

function Expenses() {
  return (
    <div>
      {expenseData.map((expense) => {
        return <ExpenseItem expense={expense} />;
      })}
    </div>
  );
}

export default Expenses;
