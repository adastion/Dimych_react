import React from 'react';
import styles from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = (props) => {
  let postData = [
    { id: 1, message: 'Hi', likesCount: 2},
    { id: 2, message: 'Bay', likesCount: 1},
    { id: 3, message: 'buga gaga', likesCount: 4},
  ];

  return (
    <div>
      <div className={styles.dotnot}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        <Post message={postData[2].message} likesCount={postData[2].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
