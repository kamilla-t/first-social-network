import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import Post from '../MyPosts/Post/Post';
const MyPosts = () => {
  return (
    <div>
      My posts
        <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likesCount='23' />
        <Post message="It's my first post" likesCount='0' />
      </div>
    </div>)
}

export default MyPosts;