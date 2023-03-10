import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.logo}>Company Name</div>
        </div>
    );
};

export default Header;