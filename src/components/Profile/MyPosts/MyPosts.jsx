import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {
    function onAddPost() {
        props.onAddPost();
    }

    function onChangePost(e) {
        props.onChangePost(e.target.value)
    }

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div className={classes.createContent}>
                <div>
                    <textarea
                        onChange={onChangePost}
                        value={props.profilePage.newPostText}
                    />
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {props.profilePage.posts.map(item =>
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