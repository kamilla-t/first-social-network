import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://cache.desktopnexus.com/thumbseg/97/97556-bigthumbnail.jpg' alt='ava' />
      {props.message}
            <div>
        <span> <img src='https://c7.hotpng.com/preview/886/3/614/facebook-like-button-computer-icons-thumb-signal-thumbs-up-thumbnail.jpg' alt=''/> 
        </span> 
        {props.likesCount}
      </div>

    </div>
  )
}

export default Post;