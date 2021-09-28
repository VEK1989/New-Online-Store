const { Cart, CartBook, Book, BookInfo } = require('../models/models')
const tokenService = require('../service/token-service')
const jwt = require('jsonwebtoken')
const { Op } = require("sequelize")

class CartController {
	async addBook(req, res) {
		try {
			const { id } = req.body
			const token = req.headers.authorization.split(' ')[1]
			const user = jwt.verify(token, process.env.SECRET_ACCESS_KEY)
			const cart = await Cart.findOne({ where: { userId: user.id } })
			await CartBook.create({ cartId: cart.id, bookId: id })
			return res.json('Товар добавлен в корзину')
		} catch (e) {
			console.error(e)
		}
	}

	async getBook(req, res) {
		try {
			const token = req.headers.authorization.split(' ')[1]
			const userData = tokenService.validateAccessToken(token)
			if (!userData) {
				return res.status(401).json({ message: "Не авторизован" })
			}
			const user = jwt.verify(token, process.env.SECRET_ACCESS_KEY)
			const { id } = await Cart.findOne({ where: { userId: user.id } })
			const cart = await CartBook.findAll({ where: { cartId: id } })

			const cartArr = [];
			for (let i = 0; i < cart.length; i++) {
				const cartBook = await Book.findOne({
					where: {
						id: cart[i].bookId,

					},
					include: {
						model: BookInfo, as: "info",
						where: {
							bookId: cart[i].bookId,
							[Op.or]: [
								{
									bookId: {
										[Op.not]: null
									}
								}
							],
						},
						required: false
					}
				});
				cartArr.push(cartBook)
			}

			return res.json(cartArr)
		} catch (e) {
			console.error(e)
		}
	}

	async deleteBook(req, res) {
		try {
			const { id } = req.params
			const user = req.user

			const cart = await Cart.findOne({ where: { userId: user.id } })
			if (cart.userId === user.id) {
				await CartBook.destroy({ where: { cartId: cart.id, bookId: id } })
				return res.json('Товар удален из вашей корзины')
			}
			return res.json(`У вас нет доступа для удаления товара(${id}) из корзины, которая вам не принадлежит`)
		} catch (e) {
			console.error(e)
		}
	}
}

module.exports = new CartController()