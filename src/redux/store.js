const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let store = {

    rerenderEntireTree() {
        console.log("state changed")
    },

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
                {id: 3, message: "Bye"}]
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            store._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }

}

export const addPostActionCreator = () => ( { type: ADD_POST } )
export const updateNewPostTextActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, newText: text} )


export default store