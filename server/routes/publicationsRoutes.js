const Router = require('express');
const router = new Router();
const publicationsController = require('../controllers/publicationsController')
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN') , publicationsController.create);
router.get('/', publicationsController.select);
router.get('/:id', publicationsController.selectOne);
router.delete('/:id', publicationsController.deleteOne);

module.exports = router;