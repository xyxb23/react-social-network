import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = props.state.dialogsData.map(dialog => <DialogItem state={dialog}/>);
  let messages = props.state.messagesData.map(message => <Message state={message}/>);

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