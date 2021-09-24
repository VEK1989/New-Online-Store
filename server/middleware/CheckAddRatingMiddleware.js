const { Rating, Book } = require('../models/models')
const jwt = require('jsonwebtoken')

module.exports = async function (req, res, next) {
	try {
		const { bookId } = req.body
		const token = req.headers.authorization.split(' ')[1]
		const user = jwt.verify(token, process.env.SECRET_KEY)
		const checkRating = await Rating.findOne({ where: { bookId, userId: user.id } })
		const checkBooks = await Book.findOne({ where: { id: bookId } })

		if (!checkBooks) {
			return res.json('Товар не добавлен в базу данных')
		} else if (checkRating && checkBooks) {
			return res.json('Вы уже ставили оценку этому продукту')
		}
		return next();
	} catch (e) {
		return res.status(401).json('Что-то пошло не так')
	}
}