import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



function Dialogs() {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <DialogItem name="Andrey" id="1" />
                    <DialogItem name="Sanek" id="2" />
                    <DialogItem name="Anechka" id="3" />
                </div>
                <div className={classes.messages}>
                    <Message message="Hi" />
                    <Message message="How do you feel?" />
                    <Message message="Su4ka" />
                </div>
            </div>

        </div>
    );
}

export default Dialogs;