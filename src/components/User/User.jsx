import React from 'react';
import styles from './User.module.css';

const User = (props) => {
  let mes;
  if (props.message) {
    mes = <div className={styles.message}>{props.message}</div>;
  } else if (props.message === '' || props.message === undefined) {
    mes = null;
  }

  return (
    <div className={styles.userItem}>
      <div className={styles.user}>
        <img src={props.ava} alt="avatar" />
        {props.name}
      </div>
      {mes}
    </div>
  );
};

export default User;
