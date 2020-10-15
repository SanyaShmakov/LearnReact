import React from "react";
import classes from './Post.module.css'

function Post(props) {
    return (
        <div className={classes.item}>
            <img
                src="https://www.iconfinder.com/data/icons/avatar-78/128/12-512.png"
                alt=""
            />
            <div>
                {props.message}
            </div>
            <span>Likes: {props.likesCount}</span>
        </div>
    );
}

export default Post;