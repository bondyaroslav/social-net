import React from "react"

const Preloader = () => {

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img
                style={{width: "20%"}}
                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
                alt="loading"
            />
        </div>
    )
}

export default Preloader