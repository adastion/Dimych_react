import React from 'react';
import styles from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div>Myposts</div>
      <div className={styles.textareaWrap}>
        <textarea cols="30" rows="3" />
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <ul className={styles.dotnot}>
        <Post message="Hi" likesCount='3'/>
        <Post message="Bay" likesCount='1'/>
        <Post />
      </ul>
    </div>
  );
};

export default MyPosts;
