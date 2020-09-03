import React from "react";
import Dialogs from "./Dialogs";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

  return (
    <StoreContext.Consumer> 
      {(store) => {
        let state = store.getState();
        let dialogs = state.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} state={dialog}/>);
        let messages = state.dialogsPage.messagesData.map(message => <Message key={message.id} state={message}/>);

        let onAddMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        return(<Dialogs 
            addMessage={onAddMessage}
            updateNewMessageText={onMessageChange}
            newMessageText={state.dialogsPage.newMessageText} 
            dialogs={dialogs} 
            messages={messages}
          />)
      }
    }
    </StoreContext.Consumer>);
};

export default DialogsContainer;