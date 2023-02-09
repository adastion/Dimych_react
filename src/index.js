import store from './Redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.state} />
      </BrowserRouter>
    </React.StrictMode>,
  );
};

rerenderEntireTree(store);
store.rendersubscribe(rerenderEntireTree);