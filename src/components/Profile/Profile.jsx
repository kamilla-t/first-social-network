import React from 'react';
import s from '../Profile/Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <div >
      <div>
        <img src='https://www.w3schools.com/howto/img_snow_wide.jpg' alt='First img' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>)
}

export default Profile;