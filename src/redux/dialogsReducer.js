const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
    dialogs: [
        {id: 1, name: "Name1"},
        {id: 2, name: "Name2"},
        {id: 3, name: "Name3"}],

    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Bye"}],

    newMessageBody: ""
}   

const dialogsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        state.newMessageBody = ' '
        state.dialogsPage.messages.push({id: 6, message: body})
    }
    return state
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer