const Router = require("express")
const router = new Router()
const chatController = require("../controllers/chatController")

router.post('/chat', chatController.createChat)
router.get('/chats', chatController.getAllChats)
router.get('/chat/:id', chatController.getChat)
router.delete('/chat/:id', chatController.deleteChat)

module.exports = router