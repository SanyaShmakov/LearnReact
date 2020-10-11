import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter as Router} from "react-router-dom";

function App(props) {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />
                    }/>
                    <Route path='/dialogs' render={() =>
                        <Dialogs
                            dialogsPage={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />
                    }/>
                </div>
            </div>
        </Router>
    );
}

export default App;
