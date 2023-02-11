import Info from './Info/Info';
import MyPost from './MyPost/MyPost';
import style from './Profile.module.css';
import SendingMessage from './SendingMessage/SendingMessage';

const Profile = (props) => {
  let renderPost = props.messages.map((item) => <MyPost message={item.message} />);

  return (
    <div className={style.profile}>
      <Info />
      <SendingMessage
        updateNewPostChange={props.updateNewPostChange}
        newPostText={props.newPostText}
        addPost={props.addPost}
      />
      <div className={style.blockPost}>{renderPost}</div>
    </div>
  );
};

export default Profile;
