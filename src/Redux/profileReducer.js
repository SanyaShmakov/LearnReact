const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "How are you?", likesCount: 0},
        {id: 2, message: "It`s my first post", likesCount: 24},
    ],
    newPostText: ''
};

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                Id: 3,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        default:
            return state;
    }
}

export function addPostActionCreator() {
    return {
        type: ADD_POST,
    }
}

export function updateNewPostTextActionCreator(text) {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default profileReducer;