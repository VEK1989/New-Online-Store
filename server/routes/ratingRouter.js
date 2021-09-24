const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/AuthMiddleware')
const checkAddRating = require('../middleware/CheckAddRatingMiddleware')
const ratingController = require('../controllers/ratingController')

router
	.post('/', authMiddleware, checkAddRating, ratingController.addRating)
	.post('/check-rating', authMiddleware, ratingController.checkRating);

module.exports = router