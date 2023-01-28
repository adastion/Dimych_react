import React from 'react';
import styles from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div>
      <div className={styles.dotnot}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
