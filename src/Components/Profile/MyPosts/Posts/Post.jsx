import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.Post}>
            <div>{props.message}</div>
            <span>{props.likes}</span>
        </div>
    );
};

export default Post;