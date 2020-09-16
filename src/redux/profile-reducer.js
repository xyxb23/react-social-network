const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  postsData: [
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
  ],
  newPostText: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0
      };
      let newState = {...state};
      newState.postsData = [...state.postsData];
      newState.postsData.push(newPost);
      newState.newPostText = "";
      return newState;
    }
    case UPDATE_NEW_POST_TEXT:
      let newState = {...state};
      newState.newPostText = action.newText;
      return newState;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;