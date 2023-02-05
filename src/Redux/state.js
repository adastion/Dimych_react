let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' },
      ],
    },

    postsPage: {
      postData: [
        { id: 1, message: '', likesCount: 2 },
        { id: 1, message: '', likesCount: 2 },
        { id: 1, message: '', likesCount: 2 },
        { id: 2, message: '', likesCount: 1 },
        { id: 3, message: 'buga gaga', likesCount: 4 },
      ],
      newPostText: '',
    },

    users: {
      userData: [
        {
          id: 1,
          message: 'Hello',
          name: 'Dimych',
          pathAva: 'https://avatarko.ru/img/kartinka/9/serial_8759.jpg',
        },
        {
          id: 2,
          message: '',
          name: 'Andrey',
          pathAva: 'https://avatarko.ru/img/kartinka/17/muzhchina_16823.jpg',
        },
        {
          id: 3,
          message: 'Bay',
          name: 'Sveta',
          pathAva: 'https://avatarko.ru/img/kartinka/26/devushka_blondinka_kapyushon_25929.jpg',
        },
        {
          id: 4,
          message: 'Hello world',
          name: 'Sasha',
          pathAva: 'https://avatarko.ru/img/kartinka/11/devushka_blondinka_10873.jpg',
        },
        {
          id: 5,
          message: 'Yo!',
          name: 'Victor',
          pathAva: 'https://avatarko.ru/img/kartinka/10/muzhchina_kapyushon_luk_9596.jpg',
        },
        {
          id: 6,
          message: '',
          name: 'Valera',
          pathAva: 'https://avatarko.ru/img/kartinka/19/fantastika_muzhchina_kapyushon_18781.jpg',
        },
      ],
    },

    sidebar: {
      navItemData: [
        { id: 1, pathUrl: '/profile', name: 'Profile' },
        { id: 2, pathUrl: '/dialogs', name: 'Messages' },
        { id: 3, pathUrl: '/news', name: 'News' },
        { id: 4, pathUrl: '/music', name: 'Music' },
        { id: 5, pathUrl: '/setting', name: 'Setting' },
      ],
    },
  },

  getState () {
    return this._state;
  },

  _callSubscriber() {
    console.log('Biggi');
  },

  addPost() {
    let newPost = {
      id: 7,
      message: this._state.postsPage.newPostText,
      likesCount: 0,
    };

    this._state.postsPage.postData.push(newPost);
    this._state.postsPage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostChange(newText) {
    this._state.postsPage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
