import state from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostChange, subscribe } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostChange={updateNewPostChange} />
      </BrowserRouter>
    </React.StrictMode>,
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
