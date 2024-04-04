import React from "react"
import {Typography} from "@mui/material"
import {Link} from "react-router-dom"
import {Box} from "@mui/system"
import {useDispatch} from "react-redux"
import {setCurrentChatAC} from "../../../store/reducers/messagesReducer"
import style from "./ChatLink.module.scss"

const ChatLink = ({id, userName, lastMessage}) => {
    const dispatch = useDispatch()
    const validateText = (text) => {
        if (text.length > 20) {
            return text.substring(0, 20) + "..."
        } else {
            return text
        }
    }

    return (
        <Link to={`/messages/${id}`} className={style.chatLink}>
            <Box className={style.Chat} onClick={() => {dispatch(setCurrentChatAC(id))}}>
                <Typography className={style.chatName}>{userName}</Typography>
                <Typography style={{marginLeft: 15}}>{lastMessage ? validateText(lastMessage) : null}</Typography>
            </Box>
        </Link>
    )
}

export default ChatLink