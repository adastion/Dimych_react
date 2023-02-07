import style from './Header.module.css';
import logo from '../../img/logo.png'

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
      <h1>Welcome to my social network</h1>
    </header>
  );
};

export default Header;
