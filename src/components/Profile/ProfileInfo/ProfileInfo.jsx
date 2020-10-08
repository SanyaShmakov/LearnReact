import React from "react";
import classes from "./ProfileInfo.module.css"

function ProfileInfo() {
    return (
        <div className={classes.profileInfo}>
            <div className={classes.mainInfo}>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt=""
                />
            </div>
            <div className={classes.description}>
                <img
                    src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg"
                    alt=""
                />
            </div>
        </div>
    )
}

export default ProfileInfo;