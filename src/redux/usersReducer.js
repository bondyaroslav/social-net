let initialState = [
    {id: 1, followed: true, name: "Dima", status: "dev", location: {country: "USA", city: "New York"}}
]

const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {}
        case UNFOLLOW_USER:
            return {}
        case SET_USERS:
            return {}
        default:
            return state
    }
}

export const followUserActionCreator = (payload) => ({type: FOLLOW_USER, payload})
export const unfollowUserActionCreator = (payload) => ({type: UNFOLLOW_USER, payload})
export const setUsersActionCreator = (payload) => ({type: SET_USERS, payload})