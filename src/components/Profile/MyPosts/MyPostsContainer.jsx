import React from 'react';
import Post from "./Post/Post";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let posts = state.profilePage.postsData.map(post => <Post message={post.message} likes={post.likesCount} key={post.id}/>);

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return <MyPosts posts={posts} addPost={onAddPost} updateNewPostText={onPostChange} newPostText={state.profilePage.newPostText}/>;
};

export default MyPostsContainer;