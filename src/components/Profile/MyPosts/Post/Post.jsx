import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.ava}>
        <img
          src="https://w7.pngwing.com/pngs/464/554/png-transparent-account-avatar-profile-user-avatars-icon.png"
          alt="avatar"
        />
      </div>
      <div className={styles.text}>
        <p>{props.message}</p>
      </div>
      <div className={styles.btnWrap}>
        <button className={styles.btn}>Like</button>
        <span> {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
