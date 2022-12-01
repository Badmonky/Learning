import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import data from "./Data/ExpenseData";

function App() {

  const [expenseData, setExpenseData] = useState(data);

  function addExpenseHandler(newExpense){
    setExpenseData((prev) =>{
       //prev.push(newExpense); //this makes it break
       return [newExpense, ...prev];
    })
    console.log(expenseData);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenseData}/>
    </div>
  );
}

export default App;
