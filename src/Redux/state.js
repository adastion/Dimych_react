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
      { id: 1, name: 'Dimych', pathAva: 'https://avatarko.ru/img/kartinka/9/serial_8759.jpg' },
      { id: 2, name: 'Andrey', pathAva: 'https://avatarko.ru/img/kartinka/17/muzhchina_16823.jpg' },
      {
        id: 3,
        name: 'Sveta',
        pathAva: 'https://avatarko.ru/img/kartinka/26/devushka_blondinka_kapyushon_25929.jpg',
      },
      {
        id: 4,
        name: 'Sasha',
        pathAva: 'https://avatarko.ru/img/kartinka/11/devushka_blondinka_10873.jpg',
      },
      {
        id: 5,
        name: 'Victor',
        pathAva: 'https://avatarko.ru/img/kartinka/10/muzhchina_kapyushon_luk_9596.jpg',
      },
      {
        id: 6,
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
};

export default state;
