import { React } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="content">
        <h2>Content</h2>
        <Routes>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/dialogs">
            <Dialogs />
          </Route>
        </Routes>
        <section>
          <div>Profile</div>
          <div>Messages</div>
          <div>News</div>
          <div>Music</div>
          <div>Setting</div>
        </section>
      </main>
      <footer className="footer">
        <h3>Footer</h3>
        <section>about</section>
      </footer>
    </div>
  );
}

export default App;
