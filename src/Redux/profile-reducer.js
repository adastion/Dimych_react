const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';

let initialState = {
  posts: [
    { id: 1, message: 'Hi', likesCount: 1 },
    { id: 2, message: 'Hi girls! )', likesCount: 0 },
    { id: 3, message: 'Bye', likesCount: 12 },
    { id: 4, message: 'Hello', likesCount: 2 },
  ],

  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 1,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_CHANGE:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_CHANGE, newText: text };
};

export default profileReducer;
