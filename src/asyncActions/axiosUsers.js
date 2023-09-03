import axios from "axios";

let axiosUsers = () => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response =>
            state.usersPage.setUsers(response.data.items)
        )
}

