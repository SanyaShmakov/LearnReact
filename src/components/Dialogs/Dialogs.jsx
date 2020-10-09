import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs() {

    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sanek"},
        {id: 3, name: "Masha"},
        {id: 4, name: "Anya"},
    ]

    let messages = [
        {id: 1, message: "hello!"},
        {id: 2, message: "How do you feel?!"},
        {id: 3, message: "Su4ka!"},
        {id: 4, message: "I love you!"},
    ]

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogs.map(item => <DialogItem name={item.name} id={item.id}/>)}
                </div>
                <div className={classes.messages}>
                    {messages.map(item => <Message message={item.message} id={item.id}/>)}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;