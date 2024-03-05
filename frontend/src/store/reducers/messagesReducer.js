let initialState = {
    chats: [
        {
            id: 1,
            userName: "Petr",
            messages: [
                {id: 1, author: "Petr", text: "hello"},
                {id: 2, author: "me", text: "how are you?"},
            ]
        },
        {
            id: 2,
            userName: "Vlad",
            messages: [
                {id: 3, author: "me", text: "hello"},
                {id: 4, author: "Vlad", text: "how are you?"},
            ]
        },
    ]
}

const CREATE_NEW_CHAT = "CREATE_NEW_CHAT"
const SEND_MESSAGE = "SEND_MESSAGE"
const DELETE_MESSAGE = "DELETE_MESSAGE"
const DELETE_CHAT = "DELETE_CHAT"


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.newChat]
            }

        // case SEND_MESSAGE:
        //     const currentChat = state.chats.filter((chat) => chat.id === action.chatId)
        //     const updatedChats = state.chats.map((chat) => {
        //         if (currentChat.id === chat.id) return currentChat})
        //     return {
        //         ...state,
        //         chats: updatedChats
        //     }

        default:
            return state
    }
}

export const createNewChatAC = (newChat) => ({type: CREATE_NEW_CHAT, newChat})
// export const sendMessageAC = (chatId, message) => ({type: SEND_MESSAGE, chatId, message})

export default messagesReducer