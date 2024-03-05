import {connect} from "react-redux"
import Users from "./Users"
import {setCurrentPage, follow, getUsers, unfollow} from "../../api/usersApi"

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
    getUsers,
    follow,
    unfollow,
    setCurrentPage
})(Users)