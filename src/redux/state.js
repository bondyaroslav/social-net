let state = {


        posts: [
            {id: 1, message: "Hi, how are you?", likes: 11},
            {id: 2, message: "My first post", likes: 20}],



        dialogs: [
            {id: 1, name: "Name1"},
            {id: 2, name: "Name2"},
            {id: 3, name: "Name3"}],



        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Bye"}]

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0
    }
    state.posts.push(newPost)
}


export default state