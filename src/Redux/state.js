const state = {
  dialogsPage: {
    messagesData: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'Hi' },
      { id: 3, message: 'Bay' },
    ],

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
      { id: 1, message: 'Hi', likesCount: 2 },
      { id: 1, message: 'Hi', likesCount: 2 },
      { id: 1, message: 'Hi', likesCount: 2 },
      { id: 2, message: 'Bay', likesCount: 1 },
      { id: 3, message: 'buga gaga', likesCount: 4 },
    ],
  },

  users: {
    userData: [
      { id: 1, name: 'Dimych', pathAva: '../../../img/dima.jpg' },
      { id: 2, name: 'Andrey', pathAva: '../../img/andrey.jpg' },
      { id: 3, name: 'Sveta', pathAva: '../../img/sveta.jpg' },
      { id: 4, name: 'Sasha', pathAva: '../../img/sasha.jpg' },
      { id: 5, name: 'Victor', pathAva: '../../img/victor.jpg' },
      { id: 6, name: 'Valera', pathAva: '../../img/valera.jpg' },
    ],
  },
};

export default state;
