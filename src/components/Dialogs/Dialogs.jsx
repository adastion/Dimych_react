import React from 'react';
import '../../App.css';
import styles from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.messages.map((mes) => <Message message={mes.message} />);

  return (
    <div className={`${styles.block} content`}>
      <div className={styles.list}>{dialogsElements}</div>
      <div className={styles.messageText}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
