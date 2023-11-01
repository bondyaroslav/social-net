import {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setToggleFetching,
} from "../../store/reducers/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        toggleIsFetching: state.usersPage.toggleIsFetching
    }
}

export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setToggleFetching,
})(Users)