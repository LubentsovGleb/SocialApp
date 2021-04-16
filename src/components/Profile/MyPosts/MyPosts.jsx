import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

  let newPostElement = React.createRef();


  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text); 
  };

  return (
    <div className="">
      <h3>My posts</h3>
      <div className="">
        <textarea
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange}
        />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
        {/* <Post message={posts[1].message} like={posts[1].like} /> */}
      </div>
    </div>
  );
};

export default MyPosts;
