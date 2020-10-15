import React from "react";
import classes from './Users.module.css'
import userImage from '../../assets/images/user.png'

function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    if (pagesCount > 10) {
        pages.push(1);
        pages.push(2);
        pages.push(3);
        pages.push(pagesCount - 2);
        pages.push(pagesCount - 1);
        pages.push(pagesCount);
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
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
                                <img
                                    className={classes.avatar}
                                    src={user.photos.small !== null ? user.photos.small : userImage}
                                    alt=""
                                />
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        props.unFollow(user.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>
                                    {user.name}
                                </div>
                                <div>
                                    {user.status}
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