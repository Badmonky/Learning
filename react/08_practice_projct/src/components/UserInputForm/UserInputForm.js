import { React, useState } from "react";
import styles from "./UserInputForm.module.css";

import Card from "../UI/Card/Card";

// function UserInputForm()(
const UserInputForm = (props) => {
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });

  function resetUserInput() {
    setUserInput({
      name: "",
    age: "",
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    // const formData = {
    //   title: userInput.newExpenseTitle,
    //   amount: +userInput.newExpenseAmount,
    //   date: new Date(userInput.newExpenseDate),
    // };
    // props.onSaveExpenseData(expenseData);
    resetUserInput();
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={styles.UserInputForm}>
          <input
            required={true}
            id="nameField"
            type="text"
            placeholder="Username"
            // value={userInput.newExpenseTitle}
            // onChange={inputChangeHandler}
          />
        </div>
        <div className={styles.UserInputForm}>
          <input
            required={true}
            type="number"
            id="ageField"
            placeholder="Age"
            // value={userInput.newExpenseAmount}
            // min="0.01"
            // step="0.01"
            // onChange={inputChangeHandler}
          />
        </div>
        <div className={styles.UserInputFormActions}>
          {/* <button type="button" onClick={props.onCancel}>Cancel</button> */}
          <button type="submit">Save Expense</button>
        </div>
      </form>
    </Card>
  );
};

export default UserInputForm;
