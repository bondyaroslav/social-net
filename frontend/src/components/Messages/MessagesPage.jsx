import React from 'react'
import {Box} from "@mui/system"
import {useSelector} from "react-redux"
import Chat from "./Chat/Chat"
import ChatLink from "./ChatLink/ChatLink"

const MessagesPage = () => {
    const chats = useSelector(state => state.messagesPage.chats)

    return (
        <Box style={{display: "flex"}}>
            <Box style={{width: "30%"}}>
                {chats.map((chat) => (
                    <ChatLink
                        key={chat.id}
                        id={chat.id}
                        messages={chat.messages}
                        userName={chat.userName}
                    />
                ))}
            </Box>

            <Box style={{width: "70%"}}>
                <Chat/>
            </Box>
        </Box>
    )
}

export default MessagesPage
