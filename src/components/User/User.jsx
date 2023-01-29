import React from 'react';
import styles from './User.module.css';

const User = (props) => {
  return (
    <div className={styles.userItem}>
      <img src={props.ava} alt="avatar" />
      {props.name}
    </div>
  );
};

export default User;
