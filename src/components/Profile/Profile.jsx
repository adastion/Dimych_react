import Info from './Info/Info';
import style from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <Info />
      <form action="/" className={style.form} >
        <textarea name="my-post" className={style.textarea} />
        <button className={style.btn}>Add post</button>
      </form>
    </div>
  );
};

export default Profile;
