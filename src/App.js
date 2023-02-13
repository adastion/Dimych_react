import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import logoFooter from './img/logo_footer.png';
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
        <section>
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  newPostText={props.state.profilePage.newPostText}
                  messages={props.state.profilePage.posts}
                  dispatch={props.dispatch}
                />
              }></Route>
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  users={props.state.dialogsPage.users}
                  dialogs={props.state.dialogsPage.dialogs}
                  newMessageText={props.state.dialogsPage.newMessageText}
                  dispatch={props.dispatch}
                />
              }></Route>
          </Routes>
        </section>
      </main>
      <footer className="footer">
        <img src={logoFooter} alt="logo-footer" />
      </footer>
    </div>
  );
}

export default App;
