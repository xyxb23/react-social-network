import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
  return (
      <div className={classes.item}>
        <img src="https://html5css.ru/w3css/img_avatar3.png" alt="User avatar" />
        <span className={classes.message}>{props.message}</span>
        <div><button className={classes.likeButton}>{props.likes} like this</button></div>
      </div>
    );
}

export default Post;