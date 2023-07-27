import React from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Posts/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> )

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.MyPosts}>
            <h3>My posts</h3>
            <div className={styles.addPost}>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;