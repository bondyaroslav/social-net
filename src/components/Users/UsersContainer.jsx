import {
    followUserAC,
    unfollowUserAC,
    setUsersAC,
    setCurrentPageAC,
    setUsersTotalCountAC,
    setIsFetchingAC,
} from "../../store/reducers/usersReducer"
import {connect} from "react-redux"
import Users from "./Users"

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    followUserAC,
    unfollowUserAC,
    setUsersAC,
    setCurrentPageAC,
    setUsersTotalCountAC,
    setIsFetchingAC,
})(Users)