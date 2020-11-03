import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://localhost:5001/api/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.result) {
                let {id, login, email } = response.data.data;
                this.props.setAuthUserData(id, login, email)
            }
        });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {
    setAuthUserData,
})(HeaderContainer);