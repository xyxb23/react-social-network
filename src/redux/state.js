import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Rashid Ibragimov",
          avatar: "https://www.svgrepo.com/show/65453/avatar.svg"
        },
        {
          id: 2,
          name: "Dmitry Petrov",
          avatar: "https://www.svgrepo.com/show/63886/avatar.svg"
        },
        {
          id: 3,
          name: "Vasily Fedorov",
          avatar: "https://www.svgrepo.com/show/83466/avatar.svg"
        },
        {
          id: 4,
          name: "Theodor Slonsky",
          avatar: "https://www.svgrepo.com/show/29870/avatar.svg"
        }
      ]
    }
  },
  _callSubscriber() {
    console.log("no subscribers")
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;