import React from 'react'
import {Card} from "@mui/material"

const Post = ({name, likesCount, date}) => {
    return (
        <Card style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "60%",
            margin: 20,
            minHeight: 100
        }}>
            <p style={{overflowWrap: "break-word"}}>{name}</p>
            <p>{likesCount}</p>
            <p>{date}</p>
        </Card>
    )
}

export default Post