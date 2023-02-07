import style from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <nav className={style.sidebar}>
      <h2>Sitenavigation</h2>
      
      <ul className="menu">
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
      <div>
        <h3>Friends preview</h3>
        <section></section>
      </div>
    </nav>
  );
};

export default Sidebar;
