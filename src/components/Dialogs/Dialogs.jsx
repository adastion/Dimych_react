import style from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';

const Dialogs = (props) => {

  let listUsers = props.users.map((item) => <UserDialog name={item.name} />);
  return (
    <div className={style.dialogs}>
      <div className={style.usersList}>
        <h2>Users</h2>
        <ul className={style.usersDialogs}>
          {listUsers}
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
