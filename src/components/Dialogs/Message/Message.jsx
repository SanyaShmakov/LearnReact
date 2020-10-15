import React from "react";
import classes from "./Message.module.css";

function Message(props) {
    return (
        <div className={classes.message} key={props.id}>
            {props.message}
        </div>
    )
}

export default Message;