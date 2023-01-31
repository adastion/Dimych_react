import React from 'react';
import styles from './User.module.css';

const User = (props) => {
  let text;
  if (props.message) {
    text = <div className={styles.message}>{props.message}</div>;
  } else if (props.message === '' || props.message === undefined) {
    text = null;
  }

  let userAva;
  if (props.ava) {
    userAva = <img src={props.ava} alt="avatar" />;
  } else if (props.ava === '' || props.ava === undefined) {
    userAva = null;
  }

  return (
    <div className={styles.userItem}>
      <div className={styles.user}>
        {userAva}
        {props.name}
      </div>
      {text}
    </div>
  );
};

export default User;
