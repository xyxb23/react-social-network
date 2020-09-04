import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogs = props.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} state={dialog}/>);
  let messages = props.dialogsPage.messagesData.map(message => <Message key={message.id} state={message}/>);
  let newMessageText = props.dialogsPage.newMessageText;

  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogs}
      </div>
      <div className={classes.messages}>
        {messages}
        <div id={classes.addMessage}>
          <textarea onChange={onMessageChange} value={newMessageText}/>
          <button onClick={onAddMessage}>Add message</button>
        </div>
      </div>
    </div>);
};

export default Dialogs;