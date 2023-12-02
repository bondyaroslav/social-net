import React from 'react'
import styles from "./MyPosts.module.css"
import Post from "./Posts/Post"

const MyPosts = ({posts, newPostText, addPost, postChange}) => {

    const postsElements = posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} /> )

    const newPostElement = React.createRef()

    const onAddPost = () => {
        addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        postChange(text)
    }

    return (
        <div className={styles.MyPosts}>
            <h3>My posts</h3>
            <div className={styles.addPost}>
                <textarea ref={newPostElement} value={newPostText} onChange={onPostChange}></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts