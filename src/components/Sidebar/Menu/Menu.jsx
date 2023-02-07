import style from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
  return (
    <ul className={style.menu}>
      <li>
        <NavLink to="#s">Profile</NavLink>
      </li>
      <li>
        <NavLink to="#s">Messages</NavLink>
      </li>
      <li>
        <NavLink to="#s">News</NavLink>
      </li>
      <li>
        <NavLink to="#s">Music</NavLink>
      </li>
      <li>
        <NavLink to="#s">Setting</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
