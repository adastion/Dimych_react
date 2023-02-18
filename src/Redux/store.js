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
        { id: 1, name: 'Dimych', messages: 'hello' },
        { id: 2, name: 'Andrey', messages: 'hello' },
        { id: 3, name: 'Sveta', messages: 'hello' },
        { id: 4, name: 'Sasha', messages: 'hello' },
        { id: 5, name: 'Victor', messages: 'hello' },
        { id: 6, name: 'Valera', messages: 'hello' },
      ],
      
      users: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        
      ]
    },

    sidebar: {},
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('red');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // { type: 'ADD-POST'} example
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-CHANGE') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

window.store = store;
