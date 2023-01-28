import React from 'react';
import styles from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = (props) => {
  let postData = [
    { id: 1, message: 'Hi', likesCount: 2 },
    { id: 2, message: 'Bay', likesCount: 1 },
    { id: 3, message: 'buga gaga', likesCount: 4 },
  ];

  let postsElements = postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div>
      <div className={styles.dotnot}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
