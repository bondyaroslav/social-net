import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 1000,
    currentPage: 1,
    isFetching: false,
}
export const followUserAsync = createAsyncThunk(
    'users/followUser',
    async (userId, thunkAPI) => {
        return userId
    }
)

export const unfollowUserAsync = createAsyncThunk(
    'users/unfollowUser',
    async (userId, thunkAPI) => {
        return userId
    }
)

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        followUser(state, action) {
            const { userId } = action.payload
            const user = state.users.find((user) => user.id === userId)
            if (user) {
                user.followed = true
            }
        },
        unfollowUser(state, action) {
            const { userId } = action.payload
            const user = state.users.find((user) => user.id === userId)
            if (user) {
                user.followed = false
            }
        },
        setUsers(state, action) {
            state.users = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setToggleFetching(state, action) {
            state.isFetching = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(followUserAsync.fulfilled, (state, action) => {
                const userId = action.payload;
                const user = state.users.find((user) => user.id === userId);
                if (user) {
                    user.followed = true;
                }
            })
            .addCase(unfollowUserAsync.fulfilled, (state, action) => {
                const userId = action.payload;
                const user = state.users.find((user) => user.id === userId);
                if (user) {
                    user.followed = false;
                }
            });
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