import React from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts/MyPosts';
import Post from './components/Profile/MyPosts/Post/Post';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setting/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import { addPost } from './components/redux/state';
import { addMessage } from './components/redux/state';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/* <Route path='/dialogs' component={Dialogs} /> */}

          <Route path='/dialogs'
            render={() => <Dialogs 
            state={props.state.dialogsPage} 
            addMessage={props.addMessage} />} />

          <Route path='/profile'
            render={() => <Profile
              state={props.state.profilePage}
              addPost={props.addPost} />} />

          <Route path='/news'
            render={() => <News />} />

          <Route path='/music'
            render={() => <Music />} />

          <Route path='/settings'
            render={() => <Settings />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
