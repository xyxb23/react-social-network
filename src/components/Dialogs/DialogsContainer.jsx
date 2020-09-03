import React from "react";
import Dialogs from "./Dialogs";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let dialogs = state.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} state={dialog}/>);
  let messages = state.dialogsPage.messagesData.map(message => <Message key={message.id} state={message}/>);

  let onAddMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (<Dialogs 
            addMessage={onAddMessage}
            updateNewMessageText={onMessageChange}
            newMessageText={state.dialogsPage.newMessageText} 
            dialogs={dialogs} 
            messages={messages}
          />);
};

export default DialogsContainer;