import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from '../../Redux/usersReducer';
import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Loader from "../Loader/Loader";

export class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetching(false)
        });
    }

    componentWillUnmount() {

    }

    onPageChanged = (selectedPage) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(selectedPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selectedPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
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

function mapDispatchToProps(dispatch) {
    return {
        follow: (userId) => {
            let action = followAC(userId)
            dispatch(action)
        },
        unFollow: (userId) => {
            let action = unfollowAC(userId)
            dispatch(action)
        },
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action)
        },
        setCurrentPage: (selectedPage) => {
            let action = setCurrentPageAC(selectedPage);
            dispatch(action)
        },
        setTotalUsersCount: (totalCount) => {
            let action = setTotalUsersCountAC(totalCount);
            dispatch(action)
        },
        toggleIsFetching: (isFetching) => {
            let action = toggleIsFetchingAC(isFetching);
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);