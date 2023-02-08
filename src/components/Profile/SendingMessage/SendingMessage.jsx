import style from './SendingMessage.module.css';

const SendingMessage = (props) => {
  return (
    <form action="/" className={style.form}>
      <textarea name="my-post" className={style.textarea} />
      <button className={style.btn}>Add post</button>
    </form>
  );
};

export default SendingMessage;
