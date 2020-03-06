import React from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts/MyPosts';
import Post from './components/Profile/MyPosts/Post/Post';
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
        <div class='app-wrapper-content'>
          <Profile/>
      </div>
      

    </div>
  );
}

export default App;
