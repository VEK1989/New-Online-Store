const Router = require('express')
const router = new Router()
const cartController = require('../controllers/cartController')
const authMiddleware = require('../middleware/authMiddleware');
const checkDeleteBookFromCart = require('../middleware/CheckDeleteBookFromCartMiddleware');

router
	.post('/', authMiddleware, cartController.addBook)
	.get('/', authMiddleware, cartController.getBook)
	.delete('/:id', authMiddleware, checkDeleteBookFromCart, cartController.deleteBook);

module.exports = router