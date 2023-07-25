import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likes: 11},
                {id: 2, message: "My first post", likes: 20}],
            newPostText: " "
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: "Name1"},
                {id: 2, name: "Name2"},
                {id: 3, name: "Name3"}],

            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Bye"}],

            newMessageBody: ""
        },

        sidebar: {}
    },

    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }

}

export default store