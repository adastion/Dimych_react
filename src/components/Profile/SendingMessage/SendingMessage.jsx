import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/store';
import style from './SendingMessage.module.css';

const SendingMessage = (props) => {
  let newPostItem = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let text = newPostItem.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <div className={style.form}>
      <textarea
        onChange={onPostChange}
        ref={newPostItem}
        name="my-post"
        className={style.textarea}
        value={props.newPostText}
      />
      <button onClick={addPost} className={style.btn}>
        Add post
      </button>
    </div>
  );
};

export default SendingMessage;
