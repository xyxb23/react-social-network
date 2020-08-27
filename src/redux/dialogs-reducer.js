const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
  messagesData: [
    {
      id: 1,
      message: "Hi",
      authorName: "Rashid",
      authorAvatar: "https://www.svgrepo.com/show/65453/avatar.svg"
    },
    {
      id: 2,
      message: "How are you?",
      authorName: "Rashid",
      authorAvatar: "https://www.svgrepo.com/show/65453/avatar.svg"
    },
    {
      id: 3,
      message: "I'm fine, thanks",
      authorName: "Name2",
      authorAvatar: "https://www.svgrepo.com/show/137325/avatar.svg"
    },
    {
      id: 4,
      message: "See you later",
      authorName: "Rashid",
      authorAvatar: "https://www.svgrepo.com/show/65453/avatar.svg"
    }
  ],
  dialogsData: [
    {
      id: 1,
      name: "Name1",
      avatar: "https://www.svgrepo.com/show/95333/avatar.svg"
    },
    {
      id: 2,
      name: "Name2",
      avatar: "https://www.svgrepo.com/show/137325/avatar.svg"
    },
    {
      id: 3,
      name: "Rashid",
      avatar: "https://www.svgrepo.com/show/65453/avatar.svg"
    },
    {
      id: 4,
      name: "Noname",
      avatar: "https://www.svgrepo.com/show/9695/avatar.svg"
    },
    {
      id: 5,
      name: "Name 5",
      avatar: "https://www.svgrepo.com/show/17344/avatar.svg"
    },
    {
      id: 6,
      name: "Name6",
      avatar: "https://www.svgrepo.com/show/157054/avatar.svg"
    }
  ],
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
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