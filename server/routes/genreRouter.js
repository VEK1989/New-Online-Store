const Router = require('express')
const router = new Router
const genreController = require('../controllers/genreController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.post('/', checkRole('ADMIN'), genreController.create)
router.delete('/:id', checkRole('ADMIN'), genreController.delete)
router.get('/', genreController.getAll)

module.exports = router