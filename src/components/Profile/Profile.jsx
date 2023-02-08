import Info from './Info/Info';
import MyPost from './MyPost/MyPost';
import style from './Profile.module.css';
import SendingMessage from './SendingMessage/SendingMessage';

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <Info />
      <SendingMessage />
      <MyPost />
    </div>
  );
};

export default Profile;
