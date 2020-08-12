import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
  return <div className={classes.message}>
    <div className={classes.messageAuthor}>
      <img src={props.state.authorAvatar} alt={props.state.authorName}/>
      {props.state.authorName}
    </div>
    <div className={classes.messageText}>{props.state.message}</div>
  </div>;
}

export default Message;