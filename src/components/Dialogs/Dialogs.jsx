import style from './Dialogs.module.css';
import DialogMessage from './../Dialogs/DialogMessage/DialogMessage';
import SendingMessage from '../Profile/SendingMessage/SendingMessage';
import DialogsUsers from './DialogsUsers/DialogsUsers';

const Dialogs = (props) => {
  let messageItem = props.dialogs.map((item) => <DialogMessage message={item.message} />);
  let users = props.users.map((item) => <DialogsUsers name={item.name} />);

  return (
    <div className={style.dialogs}>
      <ul className={style.usersList}>{users}</ul>
      <div className={style.wrapMessage}>{messageItem}</div>
      <SendingMessage
        className={style.sending}
        dialogs={props.dialogs}
        newMessageText={props.newMessageText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Dialogs;
