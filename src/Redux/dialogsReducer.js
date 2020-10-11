const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

function dialogsReducer(state, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                Id: 5,
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            break;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            break;
        }
        default:
            break;
    }
    return state;
}

export function addMessageActionCreator() {
    return {
        type: ADD_MESSAGE,
    }
}

export function updateNewMessageTextActionCreator(text) {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    }
}
export default dialogsReducer;