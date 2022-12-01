import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [newExpenseTitle, setnewExpenseTitle] = useState('');
  // const [newExpenseAmount, setnewExpenseAmount] = useState('');
  // const [newExpenseDate, setnewExpenseDate] = useState('');
  const [userInput, setUserInput] = useState({
    newExpenseTitle: "",
    newExpenseAmount: "",
    newExpenseDate: "",
  });

  function inputChangeHandler(event) {
    let tempInputs = { ...userInput };
    switch (event.target.id) {
      case "titleField":
        tempInputs.newExpenseTitle = event.target.value;
        break;
      case "amountField":
        tempInputs.newExpenseAmount = event.target.value;
        break;
      case "dateField":
        tempInputs.newExpenseDate = event.target.value;
        break;
      default:
        break;
    }
    setUserInput(tempInputs);
  }

  function resetUserInput() {
    setUserInput({
      newExpenseTitle: "",
      newExpenseAmount: "",
      newExpenseDate: "",
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: userInput.newExpenseTitle,
      amount: userInput.newExpenseAmount,
      date: new Date(userInput.newExpenseDate),
    };
    props.onSaveExpenseData(expenseData);
    resetUserInput();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            required='true'
            id="titleField"
            type="text"
            value={userInput.newExpenseTitle}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            required='true'
            type="number"
            id="amountField"
            value={userInput.newExpenseAmount}
            min="0.01"
            step="0.01"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            required='true'
            type="date"
            id="dateField"
            value={userInput.newExpenseDate}
            min="2020-01-01"
            max="2023-12-31"
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Save Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
