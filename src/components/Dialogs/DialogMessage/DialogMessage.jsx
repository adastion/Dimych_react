import style from './DialogMessage.module.css';

const DialogMessage = (props) => {
  return (
    <div className={style.dialogMessage}>
      <div className={style.img}>
        <img src="https://1avatara.ru/pic/men/man0016.jpg" alt="user-avatar" />
      </div>
      <p className={style.text} >{props.message}</p>
    </div>
  );
};

export default DialogMessage;
