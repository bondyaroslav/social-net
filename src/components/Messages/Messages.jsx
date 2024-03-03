import React, {useEffect, useState} from 'react'
import {Card, Typography} from "@mui/material"
import {Container} from "@mui/system"
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import Chat from "./Chat"

const Messages = () => {
    const [chats, setChats] = useState([])
    let {userId} = useParams()

    const createNewChat = () => {
        const chat = {
            id: new Date().getTime(),
            messages: [],
        }
        setChats(chat)
    }

    return (
        <Container>
            {chats.map((chat) => (
                <div>{chat.chatId} {userId}</div>
            ))}
        </Container>
    )
}

export default Messages



// const sendMessage = () => {
//     const message = {
//         id: new Date().getTime()
//     }
//
// }