import React from "react";
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.state.id;

  return <div className={classes.dialog}>
    <img src={props.state.avatar} alt={props.state.name}/>
    <NavLink to={path} activeClassName={classes.active} visitedClassName={classes.visited}>{props.state.name}</NavLink>
  </div>;
}

export default DialogItem;