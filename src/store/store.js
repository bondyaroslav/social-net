import {applyMiddleware, combineReducers, createStore} from "redux"
import profileReducer from "./reducers/profileReducer"
import messagesReducer from "./reducers/messagesReducer"
import usersReducer from "./reducers/usersReducer"
import authReducer from "./reducers/authReducer"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

window.store = store

export default store