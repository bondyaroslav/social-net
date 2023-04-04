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

    getState() {
        debugger;
        return this._state
    },

    _callSubscriber() {
        console.log("State changed")
    },

    addPost(postMessage) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        }
        store._state.profilePage.posts.push(newPost)
        store._state.profilePage.newPostText = ' '
        store._callSubscriber(store._state)
    },

    updateNewPostText (newText) {
        this.store._state.profilePage.newPostText = newText
        this.store.rerenderEntireTree(store._state)
    },

    subscribe (observer) {
        this._callSubscriber = observer
    },
}

export default store