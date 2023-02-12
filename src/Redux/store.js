const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likesCount: 1 },
        { id: 2, message: 'Hi girls! )', likesCount: 0 },
        { id: 3, message: 'Bye', likesCount: 12 },
        { id: 4, message: 'Hello', likesCount: 2 },
      ],

      newPostText: '',
    },

    dialogsPage: {
      users: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' },
      ],

      dialogs: [
        { id: 1, message: 'red', name: 'Dimych' },
        { id: 2, message: 'asd', name: 'Andrey' },
        { id: 3, message: 'ccccccc', name: 'Sveta' },
        { id: 4, message: 'ccc', name: 'Sasha' },
        { id: 5, message: 'aa', name: 'Victor' },
        { id: 6, message: 'ccc', name: 'Valera' },
      ],

      newMessageText: '',
    },

    sidebar: {},
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('red');
  },
  addPost() {
    let newPost = {
      id: 1,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostChange(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // { type: 'ADD-POST'} example
    if (action.type === ADD_POST) {
      let newPost = {
        id: 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_CHANGE) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = { id: 1, message: this._state.dialogsPage.newMessageText, name: 'Dimych' };
      this._state.dialogsPage.dialogs.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_CHANGE, newText: text };
};

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export const updateNewMessageActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export default store;
window.store = store;
