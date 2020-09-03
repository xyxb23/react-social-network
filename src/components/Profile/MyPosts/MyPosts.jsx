import React from 'react';
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={classes.addPost}>
        <textarea onChange={onPostChange} value={props.newPostText}/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {props.posts}
      </div>
    </div>
  );
};

export default MyPosts;