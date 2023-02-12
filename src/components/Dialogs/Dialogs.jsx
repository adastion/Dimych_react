import style from './Dialogs.module.css';
import DialogMessage from './../Dialogs/DialogMessage/DialogMessage';
import SendingMessage from '../Profile/SendingMessage/SendingMessage';

const Dialogs = (props) => {
  let messageItem = props.dialogs.map((item) => <DialogMessage message={item.message} />);

  return (
    <div className={style.dialogs}>
      {messageItem}
      <SendingMessage
        dialogs={props.dialogs}
        newMessageText={props.newMessageText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Dialogs;
