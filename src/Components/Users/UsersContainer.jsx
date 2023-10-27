import {
    followUserActionCreator,
    unfollowUserActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator,
    setUsersTotalCountActionCreator,
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
        },
        setToggleFetching: (toggleIsFetching) => {
            dispatch(setToggleFetching(toggleIsFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)