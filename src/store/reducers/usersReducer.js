let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
}

const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
// const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"
const SET_TOGGLE_FETCHING = "SET_TOGGLE_FETCHING"

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId
                    ? { ...user, followed: true }
                    : user)
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId
                    ? { ...user, followed: false }
                    : user)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        // case SET_USERS_TOTAL_COUNT:
        //     return {
        //         ...state,
        //         totalUsersCount: action.totalCount
        //     }
        case SET_TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const followUserAC = (userId) => ({type: FOLLOW_USER, userId})
export const unfollowUserAC = (userId) => ({type: UNFOLLOW_USER, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})
// export const setUsersTotalCountAC = (totalCount)  => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const setIsFetchingAC = (isFetching)  => ({type: SET_TOGGLE_FETCHING, isFetching})

export default usersReducer