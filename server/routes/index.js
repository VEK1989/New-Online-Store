const Router = require('express')
const router = new Router
const authorRouter = require('./authorRouter')
const boofRouter = require('./bookRouter')
const genreRouter = require('./genreRouter')
const userRouter = require('./userRouter')
const cartRouter = require('./cartRouter')

router.use('/user', userRouter)
router.use('/book', boofRouter)
router.use('/author', authorRouter)
router.use('/genre', genreRouter)
router.use('/cart', cartRouter)

module.exports = router