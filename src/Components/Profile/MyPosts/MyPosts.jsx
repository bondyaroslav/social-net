import React from 'react';
import Post from "./Posts/Post";
import style from "./MyPosts.module.css"

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Hi, how are you?", likes: 11},
        {id: 2, message: "My first post", likes: 20}
    ]

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message={postsData[0].message} likes={postsData[0].likes} id={postsData[0].id}/>
                <Post message={postsData[1].message} likes={postsData[1].likes} id={postsData[1].id}/>
            </div>
        </div>
    );
};

export default MyPosts;