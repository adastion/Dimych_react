import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.ava}>
        <img
          src="https://aniyuki.com/wp-content/uploads/2022/05/image-sad-anime-boy-aniyuki.com-62.jpg"
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
