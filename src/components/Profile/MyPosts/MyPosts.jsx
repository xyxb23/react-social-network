import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.posts.map(post => <Post message={post.message} likes={post.likesCount} key={post.id}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD_POST'});
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE_NEW_POST_TEXT', newText: text});
  };

  return (
    <div>
      <div className={classes.addPost}>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;