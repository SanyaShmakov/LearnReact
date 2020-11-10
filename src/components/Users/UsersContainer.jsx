import {connect} from "react-redux";
import {
    setCurrentPage,
    getUsers, follow, unfollow,
} from '../../Redux/usersReducer';
import React from 'react';
import Users from './Users';
import Loader from "../Loader/Loader";

export class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (selectedPage) => {
        this.props.getUsers(selectedPage, this.props.pageSize);
        this.props.setCurrentPage(selectedPage);
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
                        unfollow={this.props.unfollow}
                        isFetching={this.props.isFetching}
                        followingInProgress={this.props.followingInProgress}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
})(UsersContainer);