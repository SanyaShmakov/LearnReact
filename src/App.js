import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import {Route, BrowserRouter as Router} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route
                        path='/profile'
                        render={() => <Profile/>}
                    />
                    <Route
                        path='/dialogs'
                        render={() => <DialogsContainer/>}
                    />
                    <Route
                        path='/users'
                        render={() => <UsersContainer/>}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
