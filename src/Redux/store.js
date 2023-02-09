export const store = {
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
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' },
      ],
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
};

window.store = store;
