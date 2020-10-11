import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";

function MyPosts(props) {
    function addPost() {
        props.dispatch(addPostActionCreator());
    }

    function onPostChange(e) {
        props.dispatch(updateNewPostTextActionCreator(e.target.value));
    }

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div className={classes.createContent}>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {props.posts.map(item =>
                    <Post
                        key={item.id}
                        message={item.message}
                        likesCount={item.likesCount}
                    />
                )}
            </div>
        </div>
    );
}

export default MyPosts;