let initialState = {
    posts: [],
    profile: null,
}

const ADD_POST = "ADD_POST"
const DELETE_POST = "DELETE_POST"
const EDIT_POST = "EDIT_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.newPost]
            }

        case DELETE_POST:
            const filteredPosts = state.posts.filter(post => post.id !== action.postId)
            return {
                ...state,
                posts: filteredPosts
            }

        case EDIT_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        return {...post, text: action.newPostText}
                    } else return post
                })
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
export const deletePostAC = (postId) => ({type: DELETE_POST, postId})
export const editPostTextAC = (postId, newPostText) => ({type: EDIT_POST, postId, newPostText})
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})


export default profileReducer