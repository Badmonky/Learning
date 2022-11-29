import React from "react";
// import expenseData from "../Data/ExpenseData";
import ExpenseForm from "./ExpenseForm";


import './NewExpense.css'

const NewExpense = (props) => {

  function saveExpendeDataHandler(enteredExpenseData){
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(newExpenseData);
  }

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpendeDataHandler}/>
  </div>

}

export default NewExpense;