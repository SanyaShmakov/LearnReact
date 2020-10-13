import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {

    function onAddMessage() {
        props.onAddMessage();
    }

    function onChangeMessage(e) {
        props.onChangeMessage(e.target.value)
    }

    return (
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
                        onChange={onChangeMessage}
                        value={props.dialogsPage.newMessageText}
                    />
                </div>
                <button onClick={onAddMessage}>Добавить сообщение</button>
            </div>
        </div>
    );
}

export default Dialogs;