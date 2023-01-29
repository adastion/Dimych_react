import React from 'react';
import '../../App.css';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import User from '../User/User';

const Profile = (props) => {
  let userItem = props.user.userData.map((item) => <User name={item.name} path={item.id}/>);
  return (
    <div className="content">
      <div className={styles.banner}></div>
      {userItem}
      <ProfileInfo />
      <MyPosts posts={props.dataPosts} />
    </div>
  );
};

export default Profile;
