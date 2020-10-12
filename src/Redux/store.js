import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "How are you?", likesCount: 0},
                {id: 2, message: "It`s my first post", likesCount: 24},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
}

export default store;
