import React from 'react'

const Header = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 100,
            backgroundColor: "#313131"
        }}>
            <h3 style={{
                fontSize: 40,
                color: "whitesmoke",
                marginLeft: 20,
            }}>social net</h3>
        </div>
    )
}

export default Header