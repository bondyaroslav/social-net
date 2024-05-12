const db = require('../db')

class MessagesController {
    async createMessage(req, res) {
        const {id, senderId, takerId, text, date, chatId} = req.body
        console.log(req.body)
        const newChat = await db.query(
            `INSERT INTO "messages" ("id", "senderId", "takerId", "text", "date", "chatId") values ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [id, senderId, takerId, text, date, chatId])
        res.json(newChat.rows[0])
    }
    async deleteMessage(req, res) {
        const id = req.params.id
        const messages = await db.query(`DELETE FROM "messages" WHERE "id" = $1`, [id])
        res.json(messages.rows)
    }
    async editMessage(req, res) {
        const {id, text} = req.body
        const message = await db.query(`UPDATE "messages" SET "text" = $1 WHERE "id" = $2 RETURNING *`, [text, id])
        res.json(message.rows[0])
    }
}

module.exports = new MessagesController()