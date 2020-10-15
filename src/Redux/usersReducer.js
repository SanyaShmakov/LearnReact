const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
        default:
            return state;
    }
}

export function followAC(userId) {
    return {
        type: FOLLOW,
        userId,
    }
}

export function unfollowAC(userId) {
    return {
        type: UNFOLLOW,
        userId,
    }
}

export function setUsersAC(users) {
    return {
        type: SET_USERS,
        users,
    }
}

export function setCurrentPageAC(selectedPage) {
    return {
        type: SET_CURRENT_PAGE,
        selectedPage,
    }
}

export function setTotalUsersCountAC(totalCount) {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount,
    }
}

export function toggleIsFetchingAC(isFetching) {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
}

export default usersReducer;