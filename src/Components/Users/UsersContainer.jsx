import {
    followUserActionCreator,
    unfollowUserActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator,
    setUsersTotalCountActionCreator,
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followUserActionCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unfollowUserActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreator(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)