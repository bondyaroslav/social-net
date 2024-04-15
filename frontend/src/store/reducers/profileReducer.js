import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    posts: [],
    profile: null,
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        editPost: (state, action) => {
            const { postId, newPostText } = action.payload
            const postIndex = state.posts.findIndex(post => post.id === postId)
            if (postIndex !== -1) {
                state.posts[postIndex].text = newPostText
            }
        },
        setUserProfile: (state, action) => {
            state.profile = action.payload
        },
    }
})

export const {
    addPost,
    deletePost,
    editPost,
    setUserProfile
} = profileSlice.actions

export default profileSlice.reducer