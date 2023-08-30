import React from "react";
import axios from "axios";

const Users = ({users, setUsers}) => {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => console.log(response.data.name))

    if (users.length === 0) {
        setUsers([
            {id: 1, followed: false, name: "Dima", status: "dev", location: {country: "USA", city: "New York"}},
            {id: 2, followed: true, name: "Dima", status: "dev", location: {country: "USA", city: "New York"}},
        ])
    }
    else {
        return 0
    }


    return (
        <div>{users.map(user =>
            <div key={user.id}>
                {user.id} {user.name} {user.followed} {user.status} {user.location.country} {user.location.city}
            </div>
        )}</div>
    )
}

export default Users