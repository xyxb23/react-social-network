import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {
  let dialogs = props.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} state={dialog}/>);
  let messages = props.dialogsPage.messagesData.map(message => <Message key={message.id} state={message}/>);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogs}
      </div>
      <div className={classes.messages}>
        {messages}
        <div id={classes.addMessage}>
          <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText}/>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>);
};

export default Dialogs;