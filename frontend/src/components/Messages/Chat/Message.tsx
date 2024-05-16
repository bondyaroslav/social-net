import React from 'react'
import {Card, Typography} from "@mui/material"
import style from "./Message.module.scss"

const Message = ({date, text}) => {
    const convertToHours = (date) => {
        const newDate = new Date(date)
        const hours = String(newDate.getHours()).padStart(2, '0')
        const minutes = String(newDate.getMinutes()).padStart(2, '0')
        return `${hours}:${minutes}`
    }
    console.log(text, date)
    return (
        <Card className={style.message}>
            <Typography className={style.messageText}>{text}</Typography>
            <Typography className={style.messageDate}>{convertToHours(date)}</Typography>
        </Card>
    )
}

export default Message