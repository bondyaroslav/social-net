import React from "react";

const Users = ({users}) => {

    console.log(users)

    let user = users.map(user =>
        <div>
            {user.id} {user.name} {user.followed} {user.status} {user.location.country} {user.location.city}
        </div>
    )

    return (
        <div>{user}</div>
    )
}

export default Users