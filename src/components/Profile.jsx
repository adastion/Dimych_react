import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <ul className={styles.content}>
      <div className={styles.banner}></div>
      <li>ava description</li>
      <li>My posts</li>
      <li>New posts</li>
      <li className={styles.item}>post 1</li>
      <li className={styles.item}>post 2</li>
    </ul>
  );
};

export default Profile;
