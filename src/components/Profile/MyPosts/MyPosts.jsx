import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = (props) => {
  let posts = props.posts.map(post => <Post message={post.message} likes={post.likesCount}/>);
  return (
    <div>
      <div className={classes.addPost}>
        <textarea/>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={classes.posts}>
        {posts}
      </div>
    </div>
  );
}

export default MyPosts;