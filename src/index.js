import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Redux/store';
import App from './App';
import { addPost, updateNewPostChange, subscribe } from './Redux/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.state} addPost={addPost} updateNewPostChange={updateNewPostChange} />
      </BrowserRouter>
    </React.StrictMode>,
  );
};

rerenderEntireTree(store);
subscribe(rerenderEntireTree);
