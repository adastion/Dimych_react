import React from 'react';
import User from '../../User/User';
import styles from './Friends.module.css';

const Friends = (props) => {
  let userItem = props.user.userData.map((item) => <User name={item.name} ava={item.pathAva} />);
  return (
    <div>
      <h2 className={styles.title}>Friends</h2>
      <div className={styles.item}>{userItem}</div>
    </div>
  );
};

export default Friends;
