import style from './DialogsUsers.module.css';

const DialogsUsers = (props) => {
  return <li className={style.users}>{props.name}</li>;
};

export default DialogsUsers;
