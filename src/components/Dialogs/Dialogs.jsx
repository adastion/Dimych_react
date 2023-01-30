import React from 'react';
import '../../App.css';
import styles from './Dialogs.module.css';
// import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import User from './../User/User';

const Dialogs = (props) => {
  // let dialogsElements = props.dialogs.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.messages.messagesData.map((mes) => <Message message={mes.message} />);
  let dialogsElements = props.users.userData.map((userEl) => <User name={userEl.name} ava={userEl.pathAva}/>)
  debugger

  return (
    <div className={`${styles.block} content`}>
      <div className={styles.list}>{dialogsElements}</div>
      <div className={styles.messageText}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
