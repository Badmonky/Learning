// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import UserInputForm from './components/UserInputForm/UserInputForm';
import UserList from './components/UserList/UserList';

import data from "./Data/UserData";

function App() {

  const [userData, setUserData] = useState(data);

  function addUserHandler(newUser){
    setUserData((prev) =>{
      prev.push(newUser); 
      return prev;
      // return [newUser, ...prev]; //or could do it that way. 
    })
    console.log(newUser);
  }

  return (
    <div className="App">
    <UserInputForm onAddUser={addUserHandler}/>
    <UserList users={userData}/>
    </div>
  );
}

export default App;
