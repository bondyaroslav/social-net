import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.Post}>
            <div className={styles.message}>{props.message}</div>
            <span>{props.likes}</span>
        </div>
    );
};

export default Post;