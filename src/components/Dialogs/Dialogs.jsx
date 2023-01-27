import React from 'react';
import '../../App.css';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <div className={`${styles.block} content`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/dialogs/1">Dimych</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs/2">Andrey</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs/3">Sveta</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs/4">Sasha</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs/5">Victor</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs/6">Valera</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs/7">Dimych</NavLink>
        </li>
      </ul>
      <div className={styles.messageText}>message</div>
    </div>
  );
};

export default Dialogs;
