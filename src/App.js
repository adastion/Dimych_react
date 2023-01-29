import { React } from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile dataPosts={props.state.postsPage} user={props.state.users}/>} />
          <Route path="/dialogs" element={<Dialogs dialogs={props.state.dialogsPage} messages={props.state.dialogsPage}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
