import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <div className={styles.nav}>
      <nav>
        <ul>
          <li className={styles.item}>
            <NavLink
              to="/profile"
              className={(navData) => (navData.isActive ? styles.active : styles.item)}>
              Profile
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/dialogs"
              className={(navData) => (navData.isActive ? styles.active : styles.item)}>
              Messages
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/news"
              className={(navData) => (navData.isActive ? styles.active : styles.item)}>
              News
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/music"
              className={(navData) => (navData.isActive ? styles.active : styles.item)}>
              Music
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="settigs"
              className={(navData) => (navData.isActive ? styles.active : styles.item)}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <Friends user={props.user} />
    </div>
  );
};

export default Navbar;
