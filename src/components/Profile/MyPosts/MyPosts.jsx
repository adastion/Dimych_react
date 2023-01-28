import React from 'react';
import styles from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = (props) => {
  return (
    <div>
      <div className={styles.dotnot}>
        <Post message="Hi" likesCount="3" />
        <Post message="Bay" likesCount="1" />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
