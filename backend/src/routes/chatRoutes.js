const Router = require("express")
const router = new Router()
const chatController = require("../controller/chatController")

router.post('/chat', chatController.createChat)
router.get('/chat', chatController.getAllChats)
router.get('/chat/:id', chatController.getChat)
router.delete('/chat/:id', chatController.deleteChat)

module.exports = router