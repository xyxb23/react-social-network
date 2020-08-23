import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = props.dialogs.map(dialog => <DialogItem key={dialog.id} state={dialog}/>);
  let messages = props.messages.map(message => <Message key={message.id} state={message}/>);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
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
          <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText}/>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>);
};

export default Dialogs;