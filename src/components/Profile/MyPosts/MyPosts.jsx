import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {

    let postsData = [
        {id: 1, message: "How are you?", likesCount: 0},
        {id: 2, message: "It`s my first post", likesCount: 24},
    ]

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div className={classes.createContent}>
                <div>
                    <textarea name="123" id="text" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsData.map(item => <Post message={item.message} likesCount={item.likesCount}/>)}
            </div>
        </div>
    );
}

export default MyPosts;