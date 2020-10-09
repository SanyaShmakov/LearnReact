import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.posts}/>
        </div>
    );
}

export default Profile;