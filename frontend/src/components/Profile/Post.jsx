import React from 'react'
import {Card, Typography} from "@mui/material"

const Post = ({name, date}) => {
    return (
        <Card style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
            marginBottom: 20,
            minHeight: 100
        }}>
            <Typography style={{margin: 20}}>{date}</Typography>
            <Typography style={{overflowWrap: "break-word", margin: 20}}>{name}</Typography>
        </Card>
    )
}

export default Post