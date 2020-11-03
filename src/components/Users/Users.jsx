import React from "react";
import classes from './Users.module.css'
import userImage from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.users}>
            <div className={classes.pagination}>
                {
                    pages.map((item) => {
                        return (
                            <div className={classes.pageItem}>
                                <span
                                    onClick={() => {
                                        props.onPageChanged(item)
                                    }}
                                    className={props.currentPage === item ? classes.selectedPage : undefined}>
                                    {item}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/` + user.id}>
                                    <img
                                        className={classes.avatar}
                                        src={user.avatar !== null ? user.avatar : userImage}
                                        alt=""
                                    />
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://localhost:5001/api/users/follow/${user.id}`,
                                            {withCredentials: true}).then(response => {
                                            if (response.data.result) {
                                                props.unFollow(user.id);
                                            }
                                        });
                                    }}>Отписаться</button>
                                    : <button onClick={() => {
                                        axios.post(`https://localhost:5001/api/users/follow/${user.id}`, {},
                                            {withCredentials: true}).then(response => {
                                            if (response.data.result) {
                                                props.follow(user.id);
                                            }
                                        });
                                    }}>Добавить в друзья</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>
                                    {user.fullName}
                                </div>
                                <div>
                                    {/*{user.Status}*/}
                                </div>
                            </span>
                            <span>
                                {/*<div>{user.location.city}</div>*/}
                                {/*<div>{user.location.country}</div>*/}
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users