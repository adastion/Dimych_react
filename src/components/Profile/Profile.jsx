import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <ul className={styles.content}>
      <div className={styles.banner}></div>
      <li>ava description</li>
      <MyPosts />
    </ul>
  );
};

export default Profile;
