import React from 'react'

const Header = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            minHeight: 70,
            backgroundColor: "#313131"
        }}>
            <h3 style={{
                fontSize: 40,
                verticalAlign: "middle",
                color: "whitesmoke",
                marginLeft: 20,
            }}>SOCIAL NET</h3>
        </div>
    )
}

export default Header