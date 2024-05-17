import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Post {
    id: string
    text: string
}

interface Profile {
    id: string
    name: string
}

interface ProfileState {
    posts: Post[]
    profile: Profile | null
}

const initialState: ProfileState = {
    posts: [],
    profile: null,
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<Post>) => {
            state.posts.push(action.payload)
        },
        deletePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        editPost: (state, action: PayloadAction<{ postId: string; newPostText: string }>) => {
            const { postId, newPostText } = action.payload
            const postIndex = state.posts.findIndex(post => post.id === postId)
            if (postIndex !== -1) {
                state.posts[postIndex].text = newPostText
            }
        },
        setUserProfile: (state, action: PayloadAction<Profile>) => {
            state.profile = action.payload
        },
    },
})

export const {
    addPost,
    deletePost,
    editPost,
    setUserProfile
} = profileSlice.actions

export default profileSlice.reducer
