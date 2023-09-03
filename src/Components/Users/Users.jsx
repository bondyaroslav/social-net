import React from "react";
import axios from "axios";

const Users = (props) => {

    console.log(props.users)



    return (
        <div>{props.users.map(user =>
            <div key={user.id}>
                {user.id} {user.name} {user.followed} {user.status}
            </div>
        )}</div>
    )
}

export default Users