import React from "react";
import {Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {required, maxLengthCreator} from "../../../utils/validators/validators"
import {Textarea} from "./../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator (10);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit= {props.handleSubmit}>
      <Field name={"newPostText"} component={Textarea}
        validate={[required, maxLength10]} placeholder="Your message" />
      <button>Add post</button>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);


const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElements}
        {/* <Post message={posts[1].message} like={posts[1].like} /> */}
      </div>
    </div>
  );
};


export default MyPosts; 
