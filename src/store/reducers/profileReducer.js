let initialState = {
    posts: [{name: 1}],
    postName: "",
    profile: null
}

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default: return state
    }
}

export const addPostAC = (newPost) => ({type: ADD_POST, newPost})
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer