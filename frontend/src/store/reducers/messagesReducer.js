import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    currentChat: null,
    chats: [
        {
            id: 1,
            userName: "Petr",
            messages: [
                {date: 1712067331357, author: "Petr", text: "hi"},
                {date: 1712067331358, author: "me", text: "how are you?"},
            ]
        },
        {
            id: 2,
            userName: "Vlad",
            messages: [
                {date: 1712067331351, author: "me", text: "hello"},
                {date: 1712067331355, author: "Vlad", text: "chat 2"},
            ]
        },
    ]
}

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        createNewChat: (state, action) => {
            const isChatExist = state.chats.some(chat => chat.id === action.payload.id)
            if (!isChatExist) {
                state.chats.push(action.payload)
            }
        },
        setCurrentChat: (state, action) => {
            state.currentChat = state.chats.find(chat => chat.id === action.payload)
        },
        sendMessage: (state, action) => {
            const chatIndex = state.chats.findIndex(chat => chat.id === action.payload.chatId)
            if (chatIndex !== -1) {
                state.chats[chatIndex].messages.push(action.payload.message)
            }
        },
    },
})

export const { createNewChat, setCurrentChat, sendMessage } = messagesSlice.actions

export default messagesSlice.reducer