import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";

function Dialogs(props) {
    function addMessage() {
        props.dispatch(addMessageActionCreator());
    }

    function onMessageChange(e) {
        props.dispatch(updateNewMessageTextActionCreator(e.target.value))
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {props.dialogsPage.dialogs.map(item =>
                        <DialogItem
                            key={item.id}
                            name={item.name}
                            id={item.id}
                        />
                    )}
                </div>
                <div className={classes.messages}>
                    {props.dialogsPage.messages.map(item =>
                        <Message
                            key={item.id}
                            message={item.message}
                            id={item.id}
                        />
                    )}
                    <div>
                        <textarea
                            onChange={onMessageChange}
                            value={props.dialogsPage.newMessageText}
                        />
                    </div>
                    <button onClick={addMessage}>Добавить сообщение</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;