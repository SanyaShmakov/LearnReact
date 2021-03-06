import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userId: action.data.userId,
                login: action.data.login,
                email: action.data.email,
                isAuth: true,
            }
        }
        default:
            return state;
    }
}

function setAuthUserData(userId, login, email) {
    return {
        type: SET_USER_DATA,
        data: {userId, login, email},
    }
}
export function getAuthUserData() {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.result) {
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        });
    }
}

export default authReducer;