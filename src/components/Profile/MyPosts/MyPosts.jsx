import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.profilePage.postsData.map(post => <Post message={post.message} likes={post.likesCount} key={post.id}/>);
  let newPostText = props.profilePage.newPostText;

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
        <textarea onChange={onPostChange} value={newPostText}/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;