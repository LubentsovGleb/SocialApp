import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.img__wrapper}>
        <img src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></img>
      </div>
      <div className={s.text}>{props.message}</div>
      <div className={s.like}>
        <span>
          {props.like}
          <span> likes</span>
        </span>
      </div>
    </div>
  );
};

export default Post;
