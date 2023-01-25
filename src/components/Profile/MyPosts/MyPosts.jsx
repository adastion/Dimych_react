import React from 'react';
import styles from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div>Myposts</div>
      <div>
        <textarea cols="30" rows="3"></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <ul className={styles.dotnot}>
        <Post />
        <Post />
        <Post />
      </ul>
    </div>
  );
};

export default MyPosts;
