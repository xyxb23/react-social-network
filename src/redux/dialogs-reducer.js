const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case
    ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
        authorName: "Some One",
        authorAvatar: "https://www.svgrepo.com/show/65453/avatar.svg"
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      break;
    case
    UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      break;
    default:
      return state;
  }
  return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;