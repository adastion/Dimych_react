import React from 'react';
import styles from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = (props) => {
  debugger
  let postsElements = props.posts.postData.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div>
      <div className={styles.dotnot}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
