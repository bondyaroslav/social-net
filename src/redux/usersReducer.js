let initialState = [
    // {id: 1, followed: false, name: "Dima", status: "dev", location: {country: "USA", city: "New York"}},
    // {id: 2, followed: true, name: "Dima", status: "dev", location: {country: "USA", city: "New York"}},
]

const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"

export const usersReducer = (state = initialState, action) => {
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
            return [...state, action.payload]
        default:
            return state
    }
}

export const followUserActionCreator = (userId) => ({type: FOLLOW_USER, userId})
export const unfollowUserActionCreator = (userId) => ({type: UNFOLLOW_USER, userId})
export const setUsersActionCreator = (payload) => ({type: SET_USERS, payload})

export default usersReducer