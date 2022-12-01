import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
// import expenseData from "../Data/ExpenseData";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  // const [expenses, setExpenses] = useState(props.expenses); // no need for this since expenses will be re-rendered when filter state changes
  const [filter, setFilter] = useState("2020");

  function filterSelectedHandler(year) {
    setFilter(year);
  }

  let filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  let expensesToRender = <p>No expenses for this year.</p>;
  if (filteredExpenses.length > 0) {
    expensesToRender = filteredExpenses.map((expense) => {
      return <ExpenseItem expense={expense} key={expense.id} />;
    });
  }

  return (
    <div className="expenses">
      <ExpensesFilter
        filter={filter}
        onFilterSelected={filterSelectedHandler}
      />
      <Card>{expensesToRender}</Card>
    </div>
  );
}

export default Expenses;
