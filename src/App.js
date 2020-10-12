import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import {Route, BrowserRouter as Router} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile
                            store={props.store}
                        />
                    }/>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer
                            store={props.store}
                        />
                    }/>
                </div>
            </div>
        </Router>
    );
}

export default App;
