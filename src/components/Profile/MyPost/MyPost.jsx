import style from './MyPost.module.css';

const MyPost = (props) => {
  return (
    <div className={style.posts}>
      <div>
        <div className={style.avatar}>
          <img
            src="https://uprostim.com/wp-content/uploads/2021/03/image096-74.jpg"
            alt="avatar-profile"
          />
        </div>
        <h3 className={style.name}>Andrey</h3>
      </div>
      <p className={style.post}>Hi girls! )</p>
    </div>
  );
};

export default MyPost;
