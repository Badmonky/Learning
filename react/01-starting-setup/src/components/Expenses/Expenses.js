import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
// import expenseData from "../Data/ExpenseData";
import './Expenses.css'
import Card from "../UI/Card";

function Expenses(props) {
  const [expenses, setExpenses] = useState(props.expenses);
  console.log(props.expenses);
  return (
    <Card className='expenses'>
      {expenses.map((expense) => {
        return <ExpenseItem expense={expense} />;
      })}
    </Card>
  );
}

export default Expenses;
