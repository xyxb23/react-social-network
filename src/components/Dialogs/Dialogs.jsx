import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = props.state.dialogsData.map(dialog => <DialogItem key={dialog.id} state={dialog}/>);
  let messages = props.state.messagesData.map(message => <Message key={message.id} state={message}/>);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    alert(newMessageElement.current.value);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogs}
      </div>
      <div className={classes.messages}>
        {messages}
        <div id={classes.addMessage}>
          <textarea ref={newMessageElement}/>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>);
}

export default Dialogs;