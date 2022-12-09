import { React, useState } from "react";
import styles from "./UserInputForm.module.css";

import Card from "../UI/Card/Card";

// function UserInputForm()(
const UserInputForm = (props) => {
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });

  function inputChangeHandler(event) {
    let tempInputs = { ...userInput };
    switch (event.target.id) {
      case "nameField":
        tempInputs.name = event.target.value;
        break;
      case "ageField":
        tempInputs.age = event.target.value;
        break;
      default:
        break;
    }
    setUserInput(tempInputs);
  }

  function resetUserInput() {
    setUserInput({
      name: "",
      age: "",
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    const formData = {
      name: userInput.name,
      age: +userInput.age,
    };
    props.onAddUser(formData);
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
            value={userInput.name}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles.UserInputForm}>
          <input
            required={true}
            type="number"
            id="ageField"
            placeholder="Age"
            value={userInput.age}
            // min="0.01"
            // step="0.01"
            onChange={inputChangeHandler}
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
