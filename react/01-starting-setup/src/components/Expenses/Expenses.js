import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
// import expenseData from "../Data/ExpenseData";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [expenses, setExpenses] = useState(props.expenses);
  const [filter, setFilter] = useState('2019');

  function filterSelectedHandler(year) {
    setFilter(year);
    console.log(year);
  }

  return (
    <div className="expenses">
      <ExpensesFilter filter={filter} onFilterSelected={filterSelectedHandler}/>
      <Card>
        {expenses.map((expense, index) => {
          return <ExpenseItem expense={expense} key={expense}/>;
        })}
      </Card>
    </div>
  );
}

export default Expenses;
