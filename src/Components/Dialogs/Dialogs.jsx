import React from "react";
import styles from "./Dialogs.module.css"
import {Link, NavLink} from "react-router-dom";

const Dialogs = (props) => {

    return (
        <div className={styles.Dialogs}>
            <p className={styles.header}>Dialogs</p>

            <div className={styles.wrapper}>
                <div className={styles.dialogItems}>
                    <div className={styles.dialog}>
                        <Link to={"/dialogs/1"}>Name1</Link>
                    </div>
                    <div className={styles.dialog}>
                        <Link to={"/dialogs/2"}>Name2</Link>
                    </div>
                    <div className={styles.dialog}>
                        <NavLink to={"/dialogs/3"}>Name3</NavLink>
                    </div>
                </div>

                <div className={styles.messages}>
                    <div className={styles.message}>Hi</div>
                    <div className={styles.message}>How are you</div>
                    <div className={styles.message}>Bye</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs