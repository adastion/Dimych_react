import React from 'react';
import styles from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      <div>Myposts</div>
      <div>
        <textarea cols="30" rows="3"></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <ul>
        <li className={styles.item}>
          <div className={styles.ava}>
            <img
              src="https://aniyuki.com/wp-content/uploads/2022/05/image-sad-anime-boy-aniyuki.com-62.jpg"
              alt="avatar"
            />
          </div>
          <p>post 1</p>
        </li>
        <li className={styles.item}>
          <div className={styles.ava}>
            <img
              src="https://aniyuki.com/wp-content/uploads/2022/05/image-sad-anime-boy-aniyuki.com-62.jpg"
              alt="avatar"
            />
          </div>
          <p>post 1</p>
        </li>
  
      </ul>
    </div>
  );
};

export default MyPosts;
