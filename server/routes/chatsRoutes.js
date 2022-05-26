const Router = require('express');
const router = new Router();
const chatsController = require('../controllers/chatsController');

router.post('/', chatsController.create);
router.get('/', chatsController.select);
router.get('/chat', chatsController.selectOne);

module.exports = router;