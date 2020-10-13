//import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        profilePage: state.profilePage,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddPost: () => {
            let action = addPostActionCreator()
            dispatch(action)
        },
        onChangePost: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;