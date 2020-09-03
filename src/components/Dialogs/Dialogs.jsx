import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
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
        {props.dialogs}
      </div>
      <div className={classes.messages}>
        {props.messages}
        <div id={classes.addMessage}>
          <textarea onChange={onMessageChange} value={props.newMessageText}/>
          <button onClick={onAddMessage}>Add message</button>
        </div>
      </div>
    </div>);
};

export default Dialogs;