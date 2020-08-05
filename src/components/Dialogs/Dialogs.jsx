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
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/>
        <Message message={messagesData[3].message}/>
      </div>
    </div>);
}

export default Dialogs;