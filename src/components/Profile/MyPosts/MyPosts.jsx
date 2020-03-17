import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = ' ';
  }

  return (
    <div className={s.postsBLock}>

      <h3>My posts</h3>
      <div>

        <div>
          <textarea ref={newPostElement}></textarea>
        </div>

        <div>
          <button onClick={addPost}>
            Add post
          </button>
        </div>

      </div>

      <div className={s.posts}>
        {
          postsElements
        }
        {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} /> */}
      </div>

    </div>)
}

export default MyPosts;