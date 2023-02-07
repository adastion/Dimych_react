import style from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
  return (
    <ul className={style.menu}>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/dialogs">Messages</NavLink>
      </li>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/music">Music</NavLink>
      </li>
      <li>
        <NavLink to="/setting">Setting</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
