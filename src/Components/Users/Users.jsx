import React from "react";
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                response.data.items.map(item => {
                    if (this.props.users.length === 0) {
                        this.props.setUsers(item)
                    }
                })
            })
    }

    render() {
        return (
            <div>
                {this.props.users.map(user =>
                    <div key={user.id}>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                    </div>)}
            </div>
        )
    }
}

export default Users