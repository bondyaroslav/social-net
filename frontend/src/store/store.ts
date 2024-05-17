import { configureStore } from '@reduxjs/toolkit'
import profileReducer from "./reducers/profileReducer"
import messagesReducer from "./reducers/messagesReducer"
import usersReducer from "./reducers/usersReducer"
import authReducer from "./reducers/authReducer"
import newsReducer from "./reducers/newsReducer"

export const store = configureStore({
    reducer: {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        usersPage: usersReducer,
        newsPage: newsReducer,
        auth: authReducer,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
