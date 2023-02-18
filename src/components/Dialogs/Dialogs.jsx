import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  // let listUsers = props.users.map((item) => <li>{item.name}</li>);
  return (
    <div className={style.dialogs}>
      <div className={style.usersList}>
      <h2>Users</h2>
        <ul className={style.usersDialogs}>
          <li>
            <NavLink to="/users">{props.users[0].name}</NavLink>
          </li>
          <li>{props.users[2].name}</li>
          {/* {listUsers} */}
        </ul>
      </div>
      <div className={style.chat}>
        <h2>Messages</h2>
        chat
      </div>
    </div>
  );
};

export default Dialogs;
