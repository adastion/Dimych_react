import React from 'react';
import Friends from './Friends/Friends';
import NavItem from './Navitem/NavItem';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  let nameNavItem = props.sidebar.navItemData.map((navEl) => <NavItem name={navEl.name} path={navEl.pathUrl} />);

  return (
    <nav className={styles.nav}>
      <ul>{nameNavItem}</ul>
      <Friends user={props.user} />
    </nav>
  );
};

export default Navbar;
