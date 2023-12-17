import React from 'react'
import axios from "axios";

const AuthPage = ({email, password}) => {

    // const loginToAccount = () => {
    //     axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login&email=${email}&=${password}`)
    //         .then( response => console.log(response) )
    // }

    return (
        <div>
            <h2>You are not authorized</h2>
            {/*<form action="" method={"post"}>*/}
            {/*    <label htmlFor="">login:</label>*/}
            {/*    <input type="text"/>*/}
            {/*    <label htmlFor="">password:</label>*/}
            {/*    <input type="text"/>*/}
            {/*    <button onClick={ () => {loginToAccount()} }>submit</button>*/}
            {/*</form>*/}
            
            <p>authorize <a href="https://social-network.samuraijs.com/login">here</a></p>
        </div>
    )
}

export default AuthPage