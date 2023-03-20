import React from "react";
import styles from "./TextArea.module.css"

const TextArea = () => {
    return (
        <div className={styles.TextArea}>
            <input type="text"/>
            <button>Send Message</button>
        </div>
    )
}

export default TextArea