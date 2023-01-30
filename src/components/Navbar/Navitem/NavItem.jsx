import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

const NavItem = (props) => {
  return (
    <li className={styles.item}>
      <NavLink
        to={props.path}
        className={(navData) => (navData.isActive ? styles.active : styles.item)}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default NavItem;
