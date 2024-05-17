import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Message {
    id: string
    text: string
    timestamp: number
}

interface Chat {
    id: string
    messages: Message[]
}

interface MessagesState {
    currentChat: Chat | null
    chats: Chat[]
}

const initialState: MessagesState = {
    currentChat: null,
    chats: [],
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        createNewChat: (state, action: PayloadAction<Chat>) => {
            const isChatExist = state.chats.some(chat => chat.id === action.payload.id)
            if (!isChatExist) {
                state.chats.push(action.payload)
            }
        },
        setCurrentChat: (state, action: PayloadAction<string>) => {
            state.currentChat = state.chats.find(chat => chat.id === action.payload) || null
        },
        sendMessage: (state, action: PayloadAction<{ chatId: string; message: Message }>) => {
            const { chatId, message } = action.payload
            const chat = state.chats.find(chat => chat.id === chatId)
            if (chat) {
                chat.messages.push(message)
            }
        },
    },
})

export const {
    createNewChat,
    setCurrentChat,
    sendMessage
} = messagesSlice.actions

export default messagesSlice.reducer
