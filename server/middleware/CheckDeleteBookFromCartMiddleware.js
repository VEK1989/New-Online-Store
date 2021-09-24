const { Cart, CartBook } = require('./../models/models')
const jwt = require('jsonwebtoken')

module.exports = async function (req, res, next) {
	try {
		const { id } = req.params
		const user = req.user
		const userCart = await Cart.findOne({ where: { userId: user.id } })
		const bookItem = await CartBook.findOne({ where: { cartId: userCart.id, bookId: id } })

		if (bookItem) {
			return next()
		}
		return res.json('Товар не найден в корзине пользователя')
	} catch (e) {
		res.json(e)
	}
}