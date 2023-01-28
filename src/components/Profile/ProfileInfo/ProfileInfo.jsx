import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
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
        <textarea cols="30" rows="3" />
        <button>Add post</button>
        <button>Remove post</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
