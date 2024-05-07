const express = require("express")
const chatRouter = require("./src/routes/chatRoutes")
const messageRouter = require("./src/routes/messageRoutes")

const PORT = process.env.PORT || 5000
const app = express()

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    next()
})
app.use(express.json())
app.use('/api', chatRouter)
app.use('/api', messageRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
