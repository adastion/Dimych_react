import style from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
  return (
    <ul className={style.menu}>
      <li>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? style.active : style.menu)}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? style.active : style.menu)}>
          Messages
        </NavLink>
      </li>
      <li>
        <NavLink to="/news" className={(navData) => (navData.isActive ? style.active : style.menu)}>
          News
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? style.active : style.menu)}>
          Music
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/setting"
          className={(navData) => (navData.isActive ? style.active : style.menu)}>
          Setting
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
