const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')
const { body } = require('express-validator')

router.post('/registration',
	body('email').isEmail(),
	body('password').isLength({
		min: 3,
		max: 32
	}),
	userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/refresh', userController.refresh)
router.get('/activate/:link', userController.activate)

module.exports = router