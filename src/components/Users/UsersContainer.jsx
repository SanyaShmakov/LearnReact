import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
} from '../../Redux/usersReducer';
import React from 'react';
import Users from './Users';
import Loader from "../Loader/Loader";
import {userAPI} from "../../api/api";

export class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.users)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.toggleIsFetching(false)
        });
    }

    componentWillUnmount() {

    }

    onPageChanged = (selectedPage) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(selectedPage);
        userAPI.getUsers(selectedPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.users)
            this.props.toggleIsFetching(false)
        });
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Loader/>
                    : <Users
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        isFetching={this.props.isFetching}
                    />
                }
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);