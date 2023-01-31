import React from 'react';
import '../../App.css';
import styles from './Dialogs.module.css';
import User from './../User/User';

const Dialogs = (props) => {
  let dialogsElements = props.users.userData.map((userEl) =>
    userEl.message === '' || userEl.message === undefined ? null : (
      <User message={userEl.message} name={userEl.name} ava={userEl.pathAva} />
    ),
  );

  return (
    <div className={`${styles.block} content`}>
      <div></div>
      <div className={styles.list}>{dialogsElements}</div>
    </div>
  );
};

export default Dialogs;
