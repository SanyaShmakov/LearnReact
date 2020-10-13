//import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        dialogsPage: state.dialogsPage,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddMessage: () => {
            let action = addMessageActionCreator()
            dispatch(action)
        },
        onChangeMessage: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action)
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;