import React from 'react';
import styles from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.postData.map((p) =>
    !p.message == '' || !p.message == undefined ? <Post message={p.message} likesCount={p.likesCount} /> : null,
  );

  return (
    <div>
      <div className={styles.dotnot}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
