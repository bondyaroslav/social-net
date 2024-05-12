const db = require('../db')

class ChatController {
    async createChat(req, res) {
        const {chatId, chatName} = req.body
        console.log(req.body)
        const newChat = await db.query(`INSERT INTO "chats" ("chatId", "chatName") values ($1, $2) RETURNING *`, [chatId, chatName])
        res.json(newChat.rows[0])
    }
    async getAllChats(req, res) {
        const chats = await db.query(`SELECT * FROM "chats"`)
        res.json(chats.rows)
    }
    async getChat(req, res) {
        const id = req.params.id
        const messages = await db.query(`SELECT * FROM "messages" where "takerId" = $1`, [id])
        res.json(messages.rows)
    }
    async deleteChat(req, res) {
        const id = req.params.id
        const chat = await db.query(`DELETE FROM "chats" WHERE "chatId" = $1`, [id])
        const messages = await db.query(`DELETE FROM "messages" WHERE "takerId" = $1`, [id])
        res.json([chat.rows[0], messages.rows])
    }
}

module.exports = new ChatController()