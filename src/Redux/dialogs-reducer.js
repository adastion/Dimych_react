const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = { id: 1, message: state.newMessageText, name: 'Dimych' };
      state.dialogs.push(newMessage);
      state.newMessageText = '';
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export const updateNewMessageActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export default dialogsReducer;
