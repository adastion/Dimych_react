import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let messagesData = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'Hi' },
  { id: 3, message: 'Bay' },
];

let dialogsData = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Victor' },
  { id: 6, name: 'Valera' },
];

let postData = [
  { id: 1, message: 'Hi', likesCount: 2 },
  { id: 1, message: 'Hi', likesCount: 2 },
  { id: 1, message: 'Hi', likesCount: 2 },
  { id: 2, message: 'Bay', likesCount: 1 },
  { id: 3, message: 'buga gaga', likesCount: 4 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messages={messagesData} dialogs={dialogsData} posts={postData}/>
  </React.StrictMode>,
);
