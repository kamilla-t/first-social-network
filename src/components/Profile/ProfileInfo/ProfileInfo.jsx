import React from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src='https://www.w3schools.com/howto/img_snow_wide.jpg' alt='First img' />
      </div>
      <div className={s.descriptionBLock}>
        ava + description
        </div>
    </div>
    )
}

export default ProfileInfo;