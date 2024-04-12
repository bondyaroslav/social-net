import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserEmail: (state, action) => {
            state.email = action.payload
        },
        setUserId: (state, action) => {
            state.id = action.payload
        },
        setUserLogin: (state, action) => {
            state.login = action.payload
        },
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        },
    }
})

export const {
    setUserEmail,
    setUserId,
    setUserLogin,
    setIsAuth,
} = authSlice.actions

export default authSlice.reducer