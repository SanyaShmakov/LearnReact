import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress : [],
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.selectedPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }
        }
        default:
            return state;
    }
}

function acceptFollow(userId) {
    return {
        type: FOLLOW,
        userId,
    }
}

function acceptUnfollow(userId) {
    return {
        type: UNFOLLOW,
        userId,
    }
}

function setUsers(users) {
    return {
        type: SET_USERS,
        users,
    }
}

export function setCurrentPage(selectedPage) {
    return {
        type: SET_CURRENT_PAGE,
        selectedPage,
    }
}

function setTotalUsersCount(totalCount) {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount,
    }
}

function toggleIsFetching(isFetching) {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
}
function toggleFollowingProgress(isFetching, userId) {
    return {
        type:TOGGLE_FOLLOWING_PROGRESS,
        isFetching,
        userId,
    }
}

export function getUsers(currentPage, pageSize) {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.users));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        });
    }
}

export function follow(userId) {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.follow(userId).then(data => {
            if (data.result) {
                dispatch(acceptFollow(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export function unfollow(userId) {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.unFollow(userId).then(data => {
            if (data.result) {
                dispatch(acceptUnfollow(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export default usersReducer;