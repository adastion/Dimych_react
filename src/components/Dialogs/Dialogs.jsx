import React from 'react';
import '../../App.css';
import styles from './Dialogs.module.css';
import User from './../User/User';

const Dialogs = (props) => {
  let dialogsElements = props.users.userData.map((userEl) =>
    userEl.message === '' || userEl.message === undefined ? null : (
      <User message={userEl.message} name={userEl.name} ava={userEl.pathAva} />
    ),
  );

  let presentUser = props.users.userData.map((userEl) =>
    userEl.message === '' || userEl.message === undefined ? null : (
      <div className={styles.userListItem}>
        <User name={userEl.name} />
      </div>
    ),
  );

  let newDialogElement = React.createRef();
  const addDialog = () => {
    let text = newDialogElement.current.value;
    alert(text);
  };

  return (
    <div className={`${styles.block} content`}>
      <div className={styles.userList}>{presentUser}</div>
      <div className={styles.list}>
        {dialogsElements}
        <div className={styles.textareaWrap}>
          <textarea ref={newDialogElement} />
          <button onClick={addDialog}>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
