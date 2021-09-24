const Router = require('express')
const router = new Router
const authorController = require('../controllers/authorController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.get('/', authorController.getAll)
router.post('/', checkRole('ADMIN'), authorController.create)
router.delete('/:id', checkRole('ADMIN'), authorController.delete)

module.exports = router