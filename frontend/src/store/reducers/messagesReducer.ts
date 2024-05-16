import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    currentChat: null,
    chats: [],
}

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        createNewChat: (state, action) => {
            const isChatExist = state.chats.some(chat => chat.id === action.payload.id)
            if (!isChatExist) {
                state.chats = [...state.chats, action.payload]
            }
        },
        setCurrentChat: (state, action) => {
            state.currentChat = state.chats.find(chat => chat.id === action.payload)
        },
        sendMessage: (state, action) => {
            const { chatId, message } = action.payload
            const chatIndex = state.chats.findIndex(chat => chat.id === chatId)
            if (chatIndex !== -1) {
                state.chats[chatIndex] = {
                    ...state.chats[chatIndex],
                    messages: [...state.chats[chatIndex].messages, message]
                }
            }
        },
    },
})

export const {
    createNewChat,
    setCurrentChat,
    sendMessage ,
} = messagesSlice.actions

export default messagesSlice.reducer