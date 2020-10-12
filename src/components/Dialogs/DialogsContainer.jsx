import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {

    let state = props.store.getState()

    function onAddMessage() {
        let action = addMessageActionCreator()
        props.store.dispatch(action);
    }

    function onChangeMessage(text) {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action)
    }

    return (
        <Dialogs
            onAddMessage={onAddMessage}
            onChangeMessage={onChangeMessage}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
        />
    );
}

export default DialogsContainer;