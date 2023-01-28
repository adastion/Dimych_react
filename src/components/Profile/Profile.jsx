import React from 'react';
import '../../App.css'
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className="content">
      <div className={styles.banner}></div>
      <ProfileInfo/>
      <MyPosts />
    </div>
  );
};

export default Profile;
