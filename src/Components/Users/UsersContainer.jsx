import {followUserActionCreator, setUsersActionCreator, unfollowUserActionCreator} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)