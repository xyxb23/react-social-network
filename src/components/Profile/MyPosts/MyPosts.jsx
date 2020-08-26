import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
  let posts = props.posts.map(post => <Post message={post.message} likes={post.likesCount} key={post.id}/>);

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div>
      <div className={classes.addPost}>
        <textarea onChange={onPostChange} value={props.newPostText}/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;