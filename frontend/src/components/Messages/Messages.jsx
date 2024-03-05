import React, { useState, useEffect } from 'react'
import Chat from "./Chat"
import {Box, Container} from "@mui/system"
import {useDispatch, useSelector} from "react-redux"

const Messages = () => {
    const dispatch = useDispatch()
    const chats = useSelector(state => state.messagesPage.chats)

    const mappedChats = chats.map((chat) => (
        <Chat key={chat.id} id={chat.id} messages={chat.messages} userName={chat.userName}/>
    ))

    return (
        <Box>
            {mappedChats}
        </Box>
    )
}

export default Messages
