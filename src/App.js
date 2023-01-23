import { React } from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src="https://media.baamboozle.com/uploads/images/246632/1611410955_79305" alt="logo" />
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="#s">Profile</a>
          </li>
          <li>
            <a href="#s">Messages</a>
          </li>
          <li>
            <a href="#s">News</a>
          </li>
          <li>
            <a href="#s">Music</a>
          </li>
          <li>
            <a href="#s">Settings</a>
          </li>
        </ul>
      </nav>
      <main className="content">
        <div className='banner'></div>
        <div>ava description</div>
        <div>My posts</div>
        <div>New posts</div>
        <div>post 1</div>
        <div>post 2</div>
      </main>
    </div>
  );
}

export default App;
