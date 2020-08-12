import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = (props) => {
  let posts = props.posts.map(post => <Post message={post.message} likes={post.likesCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    alert(newPostElement.current.value);
  }

  return (
    <div>
      <div className={classes.addPost}>
        <textarea ref={newPostElement}/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts}
      </div>
    </div>
  );
}

export default MyPosts;