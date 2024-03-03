let initialState = {
    userChats: [
        {
            chatId: 1,
            messages: [{ messageId: 1, text: "message1" },]
        },
    ]
}

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {



        default:
            return state
    }
}


export default messagesReducer