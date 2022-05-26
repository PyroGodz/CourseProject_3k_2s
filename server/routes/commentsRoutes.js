const Router = require('express');
const router = new Router();
const commentsController = require('../controllers/commentsController');
const authorizedMiddleware = require('../middleware/authMiddleware');

router.post('/', authorizedMiddleware, commentsController.create);
router.get('/', commentsController.select);


module.exports = router;