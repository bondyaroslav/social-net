import React from 'react'
import styles from './Header.module.css'
import companyLogo from "../../assets/images/companyLogo.png"

const Header = () => {
    return (
        <div className={styles.Header}>
            <img className={styles.logo} src={companyLogo} alt="asd"/>
        </div>
    )
}

export default Header