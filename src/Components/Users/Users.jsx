import React from "react";
import styles from "./Users.module.css";

class Users extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            toggleIsFetching: true
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
                this.setState({users: data.items, toggleIsFetching: false})
            })

    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={styles.Users}>
                {this.state.toggleIsFetching ? <img className={styles.loading}
                                              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
                                              alt={"Loading"}/> :

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
                        {this.state.users.map((user) => (
                            <div className={styles.user} key={user.id}>
                                <p>{user.id}</p>
                                <p>{user.name}</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
        )
    }
}

export default Users;
