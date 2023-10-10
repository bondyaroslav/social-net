import React from "react";
import axios from "axios";
import styles from "./Users.module.css"

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                response.data.items.map(item => {
                    if (this.props.users.length === 0) {
                        this.props.setUsers(item)
                    }
                })
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={styles.Users}>
                <div>
                    {pages.map(page => {
                            return <span className={this.props.currentPage === page && styles.selectedPage}
                                         onClick={ (event) => {this.onPageChanged(page)} }>{page}
                                    </span>
                        }
                    )}
                </div>
                {this.props.users.map(user =>
                    <div className={styles.user} key={user.id}>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                    </div>)}
            </div>
        )
    }
}

export default Users