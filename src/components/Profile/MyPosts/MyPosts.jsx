import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

let postsData = [
  {
    id: 1,
    message: "first post",
    likesCount: 3
  },
  {
    id: 2,
    message: "second post",
    likesCount: 15
  },
  {
    id: 3,
    message: "third post message",
    likesCount: 5
  }
];

let posts = postsData.map(post => <Post message={post.message} likes={post.likesCount}/>);

const MyPosts = () => {
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