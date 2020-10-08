import React from "react";
import classes from './Header.module.css'

function Header() {
    return (
        <header className={ classes.header }>
            <img
                src="https://raw.githubusercontent.com/snwh/paper-icon-theme/master/Paper/512x512/apps/preferences-color.png"
                alt=""
            />
        </header>
    );
}

export default Header;