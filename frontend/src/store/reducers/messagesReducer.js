let initialState = {
    currentChat: null,
    chats: [
        {
            id: 1,
            userName: "Petr",
            messages: [
                {id: 1, author: "Petr", text: "chat 1"},
                {id: 2, author: "me", text: "howsadfsd are you?"},
            ]
        },
        {
            id: 2,
            userName: "Vlad",
            messages: [
                {id: 3, author: "me", text: "hello"},
                {id: 4, author: "Vlad", text: "chat 2"},
            ]
        },
    ]
}

const CREATE_NEW_CHAT = "CREATE_NEW_CHAT"
const SET_CURRENT_CHAT = "SET_CURRENT_CHAT"
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

        case SET_CURRENT_CHAT:
            const currentChat = state.chats.filter(chat => chat.id === action.id)
            return {
                ...state,
                currentChat: currentChat[0]
            }

        case SEND_MESSAGE:
            const updatedChats = state.chats.map(chat => {
                if (chat.id === action.chatId) {
                    return {
                        ...chat,
                        messages: [...chat.messages, action.message]
                    }
                }
                return chat
            })
            return {
                ...state,
                chats: updatedChats
            }

        default:
            return state
    }
}

export const createNewChatAC = (newChat) => ({type: CREATE_NEW_CHAT, newChat})

export const setCurrentChatAC = (id) => ({type: SET_CURRENT_CHAT, id})
export const sendMessageAC = (chatId, message) => ({type: SEND_MESSAGE, chatId, message})


export default messagesReducer