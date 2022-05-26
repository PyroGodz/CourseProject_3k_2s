const Router = require('express');
const router = new Router();
const carsRouter = require('./carsRoutes');
const chatsRoutes = require('./chatsRoutes');
const commentsRoutes = require('./commentsRoutes');
const messagesRoutes = require('./messagesRoutes');
const publicationsRoutes = require('./publicationsRoutes');
const usersRoutes = require('./usersRoutes');

router.use('/cars', carsRouter);
router.use('/chats', chatsRoutes);
router.use('/comments', commentsRoutes);
router.use('/messages', messagesRoutes);
router.use('/publications', publicationsRoutes);
router.use('/users', usersRoutes);

module.exports = router;