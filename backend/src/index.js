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

async function getMessagesByChat(chatId) {
    try {
        const client = await pool.connect();
        const queryText = "SELECT * FROM Messages WHERE MessageTakerId = $1";
        const result = await client.query(queryText, [chatId]);
        client.release();
        return { success: true, messages: result.rows };
    } catch (error) {
        console.error("Error retrieving messages by chat:", error);
        return { success: false, message: "An error occurred while retrieving messages by chat" };
    }
}

async function createChat(title) {
    try {
        const client = await pool.connect();
        const queryText = "INSERT INTO Chats (Title) VALUES ($1) RETURNING ChatId";
        const values = [title];
        const result = await client.query(queryText, values);
        client.release();
        return { success: true, chatId: result.rows[0].ChatId };
    } catch (error) {
        console.error("Error creating chat:", error);
        return { success: false, message: "An error occurred while creating the chat" };
    }
}

async function getChat(chatId) {
    try {
        const client = await pool.connect();
        const queryText = "SELECT * FROM Chats WHERE ChatId = $1";
        const result = await client.query(queryText, [chatId]);
        client.release();
        return { success: true, chat: result.rows[0] };
    } catch (error) {
        console.error("Error retrieving chat:", error);
        return { success: false, message: "An error occurred while retrieving chat" };
    }
}

app.post("/api/chats/:chatId/messages", async (req, res) => {
    const { chatId } = req.params;
    const newMessage = req.body;
    try {
        newMessage.chatId = chatId;
        res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

app.get("/api/chats/:chatId/messages", async (req, res) => {
    const { chatId } = req.params
    try {
        const result = await getMessagesByChat(chatId);
        res.json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
})

app.get("/api/chats/:chatId", async (req, res) => {
    const { chatId } = req.params;
    try {
        const result = await getChat(chatId);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
