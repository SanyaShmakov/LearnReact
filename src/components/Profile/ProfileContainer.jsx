import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1;
        }
        console.log(userId)
        axios.get(`https://localhost:5001/api/profiles/${userId}`, {withCredentials: true}).then(response => {
            this.props.setUserProfile(response.data)
        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent);