import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {
    function onAddPost() {
        props.addPost();
    }

    function onChangePost(e) {
        props.changePost(e.target.value)
    }

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div className={classes.createContent}>
                <div>
                    <textarea
                        onChange={onChangePost}
                        value={props.newPostText}
                    />
                </div>
                <button onClick={onAddPost}>Add post</button>
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