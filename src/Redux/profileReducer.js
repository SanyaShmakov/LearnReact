const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

function profileReducer(state, action) {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                Id: 3,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            break;
        }
        default:
            break;
    }
    return state;
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