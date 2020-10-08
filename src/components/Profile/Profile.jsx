import React from "react";
// import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className='profile'>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg"
                    alt=""
                />
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;