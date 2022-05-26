const Router = require('express');
const router = new Router();
const messagesController = require('../controllers/messagesController')

router.post('/', messagesController.create);
router.get('/', messagesController.select);

module.exports = router;