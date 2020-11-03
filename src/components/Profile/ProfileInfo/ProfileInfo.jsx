import React from "react";
import classes from "./ProfileInfo.module.css"
import Loader from "../../Loader/Loader";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Loader/>
    }
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
                    src={props.profile.avatar}
                    alt=""
                />
            </div>
        </div>
    )
}

export default ProfileInfo;