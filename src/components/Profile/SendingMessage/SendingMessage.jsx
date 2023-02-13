import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profile-reducer';
import { addMessageActionCreator,  updateNewMessageActionCreator } from '../../../Redux/dialogs-reducer';
import style from './SendingMessage.module.css';

const SendingMessage = (props) => {
  const addPost = () => {
    props.dispatch(
      props.hasOwnProperty('newMessageText') ? addMessageActionCreator() : addPostActionCreator(),
    );
  };

  const onPostChange = (event) => {
    let text = event.target.value;
    props.dispatch(
      props.hasOwnProperty('newMessageText')
        ? updateNewMessageActionCreator(text)
        : updateNewPostActionCreator(text),
    );
  };

  return (
    <div className={style.form}>
      <textarea
        onChange={onPostChange}
        name="my-post"
        className={style.textarea}
        value={props.hasOwnProperty('newMessageText') ? props.newMessageText : props.newPostText}
      />
      <button onClick={addPost} className={style.btn}>
        Add post
      </button>
    </div>
  );
};

export default SendingMessage;
