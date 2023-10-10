let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 20,
    currentPage: 1
}

const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id !== action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id !== action.userId) {
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
        default:
            return state
    }
}

export const followUserActionCreator = (userId) => ({type: FOLLOW_USER, userId})
export const unfollowUserActionCreator = (userId) => ({type: UNFOLLOW_USER, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountActionCreator = (totalCount)  => ({type: SET_USERS_TOTAL_COUNT, totalCount})

export default usersReducer