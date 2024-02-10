import React, {useState} from 'react'
import styles from "./MyPosts.module.css"
import Post from "./Post"
import {Button, TextField} from "@mui/material"
import {Box} from "@mui/system"

const MyPosts = () => {

    const [posts, setPosts] = useState([])
    const [postName, setPostName] = useState("")

    const addPost = () => {
        const id = new Date().getTime()
        const date = new Date(id)
        const newPost = {
            id: id,
            name: postName,
            date: `${date}`,
        }
        setPosts([...posts, newPost])
        setPostName("")
    }

    const onInputName = (name) => {
        setPostName(name)
    }

    return (
        <box className={styles.MyPosts}>
            <h3>My posts</h3>
            <Box className={styles.addPost}>
                <TextField value={postName} onChange={ (event) => {onInputName(event.target.value)} }></TextField>
                <Button onClick={ addPost }>Add post</Button>
            </Box>
            <Box className={styles.posts}>
                {posts.map((p) => (
                    <Post key={p.id} id={p.id} name={p.name} date={p.date}></Post>
                ))}
            </Box>
        </box>
    )
}

export default MyPosts