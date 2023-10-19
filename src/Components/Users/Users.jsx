import React from "react";
import styles from "./Users.module.css";

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.fetchUsers(this.props.currentPage, this.props.pageSize);
    }

    fetchUsers(page, pageSize) {
        const url = `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ users: data.items })
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={styles.Users}>
                <div className={styles.pages}>
                    {pages.map((page) => (
                        <span
                            className={styles.page}
                            key={page}
                            onClick={() => this.fetchUsers(page, this.props.pageSize)}
                        >
                            {page}
                        </span>
                    ))}
                </div>
                {this.state.users.map((user) => (
                    <div className={styles.user} key={user.id}>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users;
