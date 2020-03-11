import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 }
  ]
  
  let postElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={s.postsBLock}>

      <h3>My posts</h3>
      <div>

          <div>
            <textarea></textarea>
          </div>

        <div>
          <button>Add post</button>
        </div>

        <div>
          <button>Remove</button>
        </div>

      </div>

      <div className={s.posts}>
        {
          postElements
        }
        {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} /> */}
      </div>

    </div>)
}

export default MyPosts;