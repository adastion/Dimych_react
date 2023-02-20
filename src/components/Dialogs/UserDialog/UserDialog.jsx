import style from './UserDialog.module.css';
import { NavLink } from 'react-router-dom';

const UserDialog = (props) => {

  return (
    <li className={style.userDialog}>
      <NavLink to="/dialogs/users">{props.name}</NavLink>
    </li>
  );
    
};

export default UserDialog;
