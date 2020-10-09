import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {props.dialogsPage.dialogs.map(item => <DialogItem name={item.name} id={item.id}/>)}
                </div>
                <div className={classes.messages}>
                    {props.dialogsPage.messages.map(item => <Message message={item.message} id={item.id}/>)}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;