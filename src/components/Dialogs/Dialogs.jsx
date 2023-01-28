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
  let  messagesData = [
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

  return (
    <div className={`${styles.block} content`}>
      <div className={styles.list}>
        <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogsItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={styles.messageText}>
        <Messages message={messagesData[0].message} />
        <Messages message={messagesData[1].message} />
        <Messages message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
