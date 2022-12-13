import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

import styles from "./AddUsers.module.css";

// function AddUser(props) {}
const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log({ userInput });
    if (userInput.age.toString() <= 0) {
      // alert("Poop!");
      setError({
        title: "Invalid Input",
        message: "Please enter age > 0.",
      });
      return;
    }
    props.onAddUser(userInput.name, userInput.age);
    resetUserInput();
    //add to list
  };

  function resetUserInput() {
    setUserInput({
      name: "",
      age: "",
    });
  }

  function errorHandler() {
    setError(null);
  }

  const inputHandler = (event) => {
    let tempInputs = { ...userInput };
    switch (event.target.id) {
      case "username":
        tempInputs.name = event.target.value;
        break;
      case "age":
        tempInputs.age = event.target.value;
        break;
      default:
        break;
    }
    setUserInput(tempInputs);
  };

  return (
    <div>
      {error && (
        <Modal
          onDismiss={errorHandler}
          title={error.title}
          message={error.message}
        ></Modal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label required={true} htmlFor="username">
            Username
          </label>
          <input
            value={userInput.name}
            required={true}
            onChange={inputHandler}
            id="username"
            type="text"
          ></input>
          <label htmlFor="age">Age</label>
          <input
            value={userInput.age}
            required={true}
            onChange={inputHandler}
            id="age"
            type="number"
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
