import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';


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
    console.log('redy');
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};



export default store;
window.store = store;
