const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sanek"},
        {id: 3, name: "Masha"},
        {id: 4, name: "Anya"},
    ],
    messages: [
        {id: 1, message: "hello!"},
        {id: 2, message: "How do you feel?!"},
        {id: 3, message: "Su4ka!"},
        {id: 4, message: "I love you!"},
    ],
    newMessageText: '',
}

function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                Id: 5,
                message: state.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: '',
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText,
            }
        }
        default:
            return state;
    }
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