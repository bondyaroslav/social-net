let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    toggleIsFetching: false,
}

const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"
const SET_TOGGLE_FETCHING = "SET_TOGGLE_FETCHING"

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state.users,
                users: [...state.users, action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state.currentPage,
                currentPage: [...state.currentPage, action.currentPage]
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state.totalUsersCount,
                totalUsersCount: [...state, action.totalCount]
            }
        case SET_TOGGLE_FETCHING:
            return {
                ...state.toggleIsFetching,
                toggleIsFetching: action.payload
            }
        default:
            return state
    }
}

export const followUserAC = (userId) => ({type: FOLLOW_USER, userId})
export const unfollowUserAC = (userId) => ({type: UNFOLLOW_USER, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount)  => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const setToggleFetching = (toggleIsFetching)  => ({type: SET_TOGGLE_FETCHING, toggleIsFetching})

export default usersReducer