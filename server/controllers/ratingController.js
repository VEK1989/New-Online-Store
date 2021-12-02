const { Rating, Book } = require('../models/models')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

class RatingController {
	async addRating(req, res, next) {
		try {
			const { rate, bookId } = req.body
			const token = req.headers.authorization.split(' ')[1]
			const user = jwt.verify(token, process.env.SECRET_REFRESH_KEY)
			await Rating.create({ rate, bookId, userId: user.id })

			let rating = await Rating.findAndCountAll({
				where: {
					bookId
				},
			})

			let allRating = 0
			let middleRating
			rating.rows.forEach(item => allRating += item.rate)
			middleRating = Math.floor(Number(allRating) / Number(rating.count))

			await Book.update(
				{ rating: middleRating },
				{ where: { id: bookId } }
			)

			return res.json('Рейтинг успешно добавлен')
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async checkRating(req, res, next) {
		try {
			const { bookId } = req.body
			const token = req.headers.authorization.split(' ')[1]
			const user = jwt.verify(token, process.env.SECRET_REFRESH_KEY)
			const checkRating = await Rating.findOne({ where: { bookId, userId: user.id } })
			const checkBooks = await Book.findOne({ where: { id: bookId } })
			if (!checkBooks) {
				return res.json('Книга не найдена в базе данных')
			} else if (checkRating && checkBooks) {
				return res.json(checkBooks.rating)
			}
			return res.json(checkBooks.rating)
		} catch (e) {
			next(ApiError.unauthorizedError(e.message))
		}
	}
}

module.exports = new RatingController()