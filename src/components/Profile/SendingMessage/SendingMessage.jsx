import React from 'react';
import {
  addMessageActionCreator,
  addPostActionCreator,
  updateNewMessageActionCreator,
  updateNewPostActionCreator,
} from '../../../Redux/store';
import style from './SendingMessage.module.css';

const SendingMessage = (props) => {
  let newPostItem = React.createRef();

  const addPost = () => {
    props.dispatch(
      props.hasOwnProperty('newMessageText') ? addMessageActionCreator() : addPostActionCreator(),
    );
  };

  const onPostChange = () => {
    let text = newPostItem.current.value;
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
        ref={newPostItem}
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
