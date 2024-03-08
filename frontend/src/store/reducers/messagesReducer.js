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
const GET_CHAT = "GET_CHAT"
const SEND_MESSAGE = "SEND_MESSAGE"
const DELETE_MESSAGE = "DELETE_MESSAGE"
const DELETE_CHAT = "DELETE_CHAT"


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_CHAT:
            const isChatExist = state.chats.some(chat => chat.id === action.newChat.id)
            if (isChatExist) {
                return state
            }
            const filteredChats = state.chats.filter(chat => chat.id !== action.newChat.id)
            return {...state, chats: [...filteredChats, action.newChat]}

            case GET_CHAT:
            return state.chats.filter(chat => chat.id === action.id)

        default:
            return state
    }
}

export const createNewChatAC = (newChat) => ({type: CREATE_NEW_CHAT, newChat})

export const getChatAC = (id) => ({type: GET_CHAT, id})


export default messagesReducer