import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={`${styles.item} ${styles.active}`}>
          <a href="/profile">Profile</a>
        </li>
        <li className={styles.item}>
          <a href="/dialogs">Messages</a>
        </li>
        <li className={styles.item}>
          <a href="#s">News</a>
        </li>
        <li className={styles.item}>
          <a href="#s">Music</a>
        </li>
        <li className={styles.item}>
          <a href="#s">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
