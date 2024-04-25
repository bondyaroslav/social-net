const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "social-net",
    password: "postgres",
    port: 5432,
});

async function sendMessage(message) {
    const { messageId, messageSenderId, messageTakerId, messageText, messageData } = message;
    console.log(message)
    try {
        const client = await pool.connect();
        const queryText = "INSERT INTO Messages (MessageId, MessageSenderId, MessageTakerId, MessageText, MessageDate) VALUES ($1, $2, $3, $4, $5)";
        const values = [messageId, messageSenderId, messageTakerId, messageText, messageData];
        await client.query(queryText, values);
        client.release();
        return { success: true, message: "Message sent successfully" };
    } catch (error) {
        console.error("Error sending message:", error);
        return { success: false, message: "An error occurred while sending the message" };
    }
}

async function getAllMessages() {
    try {
        const client = await pool.connect();
        const queryText = "SELECT * FROM Messages";
        const result = await client.query(queryText);
        client.release();
        return { success: true, messages: result.rows };
    } catch (error) {
        console.error("Error retrieving messages:", error);
        return { success: false, message: "An error occurred while retrieving messages" };
    }
}

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.options("*", (req, res) => {
    res.sendStatus(200);
});

app.post("/api/messages", async (req, res) => {
    const message = req.body;
    try {
        const result = await sendMessage(message);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


app.get("/api/messages", async (req, res) => {
    try {
        const result = await getAllMessages();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
