import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [formOpen, setFormOpen] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
    console.log("here");
    setFormOpen(false);
  }

  function addExpenseHandler(){
    setFormOpen(true);
  }

  function cancelHandler() {
    setFormOpen(false);
  }

  return (
    <div className="new-expense">
      {!formOpen && <button onClick={addExpenseHandler}>Add Expense</button>}
      {formOpen && <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />}
    </div>
  );
};

export default NewExpense;
