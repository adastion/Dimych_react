import { NavLink } from 'react-router-dom';
import style from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={style.body}>
      <nav>
        <NavLink to="/profile/a">Andrey</NavLink>
        <NavLink to="/profile/b">Barmaley</NavLink>
      </nav>

      {/* <div className={style.window}>window-chat</div> */}
    </div>
  );
};

export default Profile;
