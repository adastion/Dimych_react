import { React } from 'react';
import './App.css';
import logoFooter from './img/logo_footer.png'
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
        <section>
          <Routes>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/dialogs" element={<Dialogs />}></Route>
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
