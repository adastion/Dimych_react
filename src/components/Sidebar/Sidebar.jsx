import style from './Sidebar.module.css';
import Menu from './Menu/Menu';

const Sidebar = (props) => {
  return (
    <nav className={style.sidebar}>
      <h2>Sitenavigation</h2>
      <Menu />
      <div>
        <h3>Friends preview</h3>
        <section></section>
      </div>
    </nav>
  );
};

export default Sidebar;
