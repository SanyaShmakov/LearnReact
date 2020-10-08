import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {
    return (
        <div>
            My posts
            <div>
                <textarea name="123" id="text" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>

            <div className={ classes.posts }>
                <Post message='How are you?' likesCount='0' />
                <Post message='It`s my first post' likesCount='23' />
            </div>
        </div>
    );
}

export default MyPosts;