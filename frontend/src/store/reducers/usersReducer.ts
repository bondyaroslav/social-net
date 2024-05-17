import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface User {
    id: number
    name: string
    followed: boolean
}

interface UsersState {
    users: User[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: UsersState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 1000,
    currentPage: 1,
    isFetching: false,
}

export const followUserAsync = createAsyncThunk<number, number>(
    'users/followUser',
    async (userId) => {
        return userId
    }
)

export const unfollowUserAsync = createAsyncThunk<number, number>(
    'users/unfollowUser',
    async (userId) => {
        return userId
    }
)

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        followUser(state, action: PayloadAction<{ userId: number }>) {
            const user = state.users.find(user => user.id === action.payload.userId)
            if (user) {
                user.followed = true
            }
        },
        unfollowUser(state, action: PayloadAction<{ userId: number }>) {
            const user = state.users.find(user => user.id === action.payload.userId)
            if (user) {
                user.followed = false
            }
        },
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setToggleFetching(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(followUserAsync.fulfilled, (state, action) => {
                const userId = action.payload
                const user = state.users.find(user => user.id === userId)
                if (user) {
                    user.followed = true
                }
            })
            .addCase(unfollowUserAsync.fulfilled, (state, action) => {
                const userId = action.payload
                const user = state.users.find(user => user.id === userId)
                if (user) {
                    user.followed = false
                }
            })
    },
})

export const {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setToggleFetching
} = usersSlice.actions

export default usersSlice.reducer
