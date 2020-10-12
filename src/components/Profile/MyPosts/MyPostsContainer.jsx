import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {

    let state = props.store.getState();

    function addPost() {
        let action = addPostActionCreator()
        props.store.dispatch(action);
    }

    function onPostChange(text) {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            addPost={addPost}
            changePost={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    );
}

export default MyPostsContainer;