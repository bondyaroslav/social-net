const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likes: 11},
        {id: 2, message: "My first post", likes: 20}],
    newPostText: " "
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        debugger
        let newPost = {
            id: 5,
            message: state.newPostText,
            likes: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        debugger
        state.newPostText = action.newText
    }
    return state
}

export const addPostActionCreator = () => ( { type: ADD_POST } )
export const updateNewPostTextActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, newText: text} )

export default profileReducer