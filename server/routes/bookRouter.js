const Router = require('express')
const router = new Router
const bookController = require('../controllers/bookController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.post('/', checkRole('ADMIN'), bookController.create)
router.delete('/:id', checkRole('ADMIN'), bookController.delete)
router.get('/', bookController.getAll)
router.get('/:id', bookController.getOne)

module.exports = router