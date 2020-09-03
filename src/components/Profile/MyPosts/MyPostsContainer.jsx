import React from 'react';
import Post from "./Post/Post";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {

  return (<StoreContext.Consumer> 
    {(store) => {
      let state = store.getState();
      let posts = state.profilePage.postsData.map(post => <Post message={post.message} likes={post.likesCount} key={post.id}/>);
    
      let onAddPost = () => {
        store.dispatch(addPostActionCreator());
      };
    
      let onPostChange = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
      };
      return <MyPosts posts={posts} addPost={onAddPost} updateNewPostText={onPostChange} newPostText={state.profilePage.newPostText}/>;
    }}
        </StoreContext.Consumer>);
};

export default MyPostsContainer;