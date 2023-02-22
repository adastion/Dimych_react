import { React } from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { NavLink, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <NavLink to="/profile">profile</NavLink>
          </li>
          <li>
            <NavLink to="/dialogs">dialogs</NavLink>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Content</h1>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
