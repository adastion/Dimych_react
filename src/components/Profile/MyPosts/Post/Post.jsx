import React from 'react';
import styles from './Post.module.css';

const Post = () => {
  return (
    <div className={styles.item}>
      <div className={styles.ava}>
        <img
          src="https://aniyuki.com/wp-content/uploads/2022/05/image-sad-anime-boy-aniyuki.com-62.jpg"
          alt="avatar"
        />
      </div>
      <p className={styles.item}>post 1</p>
      <button className={styles.btn}>Like</button>
    </div>
  );
};

export default Post;
