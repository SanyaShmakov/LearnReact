import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={classes.header}>
            <img
                src="https://raw.githubusercontent.com/snwh/paper-icon-theme/master/Paper/512x512/apps/preferences-color.png"
                alt=""
            />
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;