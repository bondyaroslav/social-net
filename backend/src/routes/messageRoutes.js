const Router = require("express")
const router = new Router()
const messageController = require("../controllers/messagesController")

router.post('/message', messageController.createMessage)
router.delete('/message/:id', messageController.deleteMessage)
router.put('/message/:id', messageController.editMessage)

module.exports = router