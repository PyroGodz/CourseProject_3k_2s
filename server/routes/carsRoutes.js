const Router = require('express');
const router = new Router();
const carController = require('../controllers/carController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), carController.create);
router.get('/', carController.select);
router.get('/:id', carController.selectOne);
router.delete('/:id', carController.deleteOne);

module.exports = router;