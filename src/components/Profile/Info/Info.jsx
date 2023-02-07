import style from './Info.module.css';

const Info = (props) => {
  return (
    <div className={style.info}>
      <div className={style.avatar}>
        <img
          src="https://uprostim.com/wp-content/uploads/2021/03/image096-74.jpg"
          alt="profile-avatar"
        />
      </div>
      <div className={style.description}>
        <h3>Andrey</h3>
        <p>About me</p>
        <ul>
          <li>gender: man</li>
          <li>age: 31</li>
          <li>mail: andrey.123@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
