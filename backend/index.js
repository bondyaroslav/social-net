const express = require("express")
const app = express()
const port = 5000

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'social-net',
    password: 'postgres',
    port: 5432,
})

const http = require("http").Server(app)
const cors = require("cors")
const socketIO = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:3000"
    }
})

app.get("api", (req, res) => {
    res.json({
        message: "hello"
    })
})

socketIO.on("connection", (socket) => {
    console.log(`user ${socket.id} connected`)
    socket.on("disconnect", () => {
        console.log(`user ${socket.id} disconnect`)
    })
})

http.listen(port, () => {
    console.log("working")
})
