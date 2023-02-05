import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  };

  return (
    <div className={styles.myProfile}>
      <div className={styles.wrapDescription}>
        <img
          className={styles.myAvatar}
          src="https://w7.pngwing.com/pngs/464/554/png-transparent-account-avatar-profile-user-avatars-icon.png"
          alt="my-ava"
        />
        <p>description</p>
      </div>
      <h2 className={styles.title}>My posts</h2>
      <div className={styles.textareaWrap}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          cols="30"
          rows="3"
          value={props.newPostText}
        />
        <button onClick={addPost}>Add post</button>
        <button>Remove post</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
