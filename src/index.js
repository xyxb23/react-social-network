import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

let dialogsData = [
  {
    id: 1,
    name: "Name1"
  },
  {
    id: 2,
    name: "Name2"
  },
  {
    id: 3,
    name: "Rashid"
  },
  {
    id: 4,
    name: "Noname"
  },
  {
    id: 5,
    name: "Name 5"
  },
  {
    id: 6,
    name: "Name6"
  }
];

let messagesData = [
  {
    id: 1,
    message: "Hi"
  },
  {
    id: 2,
    message: "How are you?"
  },
  {
    id: 3,
    message: "I'm fine, thanks"
  },
  {
    id: 4,
    message: "See you later"
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
