import React from 'react';
import '../../App.css'
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return <div className={`${styles.block} content` } >
    <ul>
      <li>
        <NavLink to='/dialogs/1' className={(data)=> data.isActive ? styles.active : styles.item}>Dimych</NavLink>
      </li>
      <li>
        <NavLink to='/dialogs/2' className={(data)=> data.isActive ? styles.active : styles.item}>Andrey</NavLink>
      </li>
      <li>
        <NavLink to='/dialogs/3' className={(data)=> data.isActive ? styles.active : styles.item}>Sveta</NavLink>
      </li>
      <li>
        <NavLink to='/dialogs/4' className={(data)=> data.isActive ? styles.active : styles.item}>Sasha</NavLink>
      </li>
      <li>
        <NavLink to='/dialogs/5' className={(data)=> data.isActive ? styles.active : styles.item}>Victor</NavLink>
      </li>
      <li>
        <NavLink to='/dialogs/6' className={(data)=> data.isActive ? styles.active : styles.item}>Valera</NavLink>
      </li>
      <li>
        <NavLink to='/dialogs/7' className={(data)=> data.isActive ? styles.active : styles.item}>Dimych</NavLink>
      </li>
    </ul>
    <div>
      message
    </div>
  </div>;
};

export default Dialogs;
