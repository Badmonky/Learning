import React from 'react';
import styles from './UserList.module.css';

import Card from '../UI/Card/Card'

const UserList = (props) => {

  console.log(props.users);

  return (
  <div className={styles.UserList}>
    {props.users.map((user) => {
        return <Card>Name: {user.name}  -   Age: {user.age}</Card>
      })}
  </div>
  );
};


export default UserList;
