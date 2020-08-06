import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogs}
      </div>
      <div className={classes.messages}>
        {messages}
      </div>
    </div>);
}

export default Dialogs;