import React from 'react';
import '../../App.css';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={styles.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Messages = (props) => {
  return <p>{props.message}</p>;
};

const Dialogs = (props) => {
  let messagesData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Hi' },
    { id: 3, message: 'Bay' },
  ];

  let dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Victor' },
    { id: 6, name: 'Valera' },
  ];

  let dialogsElements = dialogsData.map((dialog ) => <DialogsItem name={dialog.name} id={dialog.id}/>);
  let messagesElements = messagesData.map((mes) => <Messages message={mes.message} />);

  return (
    <div className={`${styles.block} content`}>
      <div className={styles.list}>
        {
          dialogsElements
        }
      </div>
      <div className={styles.messageText}>
        {
          messagesElements
        }
      </div>
    </div>
  );
};

export default Dialogs;
