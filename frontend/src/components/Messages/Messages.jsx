import React from 'react'
import Chat from "./Chat"
import {Box} from "@mui/system"
import {useSelector} from "react-redux"
import ChatPage from "./ChatPage"

const Messages = () => {
    const chats = useSelector(state => state.messagesPage.chats)

    return (
        <Box style={{display: "flex"}}>
            <Box style={{width: "40%"}}>
                <>
                    {chats.map((chat) => (
                        <Chat key={chat.id}
                              id={chat.id}
                              messages={chat.messages}
                              userName={chat.userName}
                        />
                    ))}
                </>
            </Box>

            <Box style={{width: "60%"}}>
                <ChatPage/>
            </Box>
        </Box>
    )
}

export default Messages
