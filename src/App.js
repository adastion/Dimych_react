import { React } from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className="app">   
      <Header />
      <Navbar user={props.state.users} sidebar={props.state.sidebar} />
      <Routes>
        <Route path="/profile" element={<Profile addPost={props.addPost} dataPosts={props.state.postsPage} />} />
        <Route
          path="/dialogs"
          element={<Dialogs users={props.state.users}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
