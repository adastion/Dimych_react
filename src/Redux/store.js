let rerenderEntireTree = () => {
  console.log('red')
};

const store = {
  state: {
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
};

export const addPost = () => {
  let newPost = {
    id: 1,
    message: store.state.profilePage.newPostText,
    likesCount: 0,
  };
  store.state.profilePage.posts.push(newPost);
  store.state.profilePage.newPostText = '';
  rerenderEntireTree(store);
};

export const updateNewPostChange = (text) => {
  store.state.profilePage.newPostText = text;
  rerenderEntireTree(store);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default store;
