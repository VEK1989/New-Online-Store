const { Rating, Book } = require('../models/models')
const jwt = require('jsonwebtoken')

class RatingController {
	async addRating(req, res) {
		try {
			const { rate, bookId } = req.body
			const token = req.headers.authorization.split(' ')[1]
			const user = jwt.verify(token, process.env.SECRET_KEY)
			await Rating.create({ rate, bookId, userId: user.id })

			let rating = await Rating.findAndCountAll({
				where: {
					bookId
				},
			})

			let allRating = 0
			let middleRating
			rating.rows.forEach(item => allRating += item.rate)
			middleRating = Number(allRating) / Number(rating.count)

			await Device.update(
				{ rating: middleRating },
				{ where: { id: bookId } }
			)

			return res.json('Рейтинг успешно добавлен')
		} catch (e) {
			console.error(e)
		}
	}

	async checkRating(req, res) {
		try {
			const { bookId } = req.body
			const token = req.headers.authorization.split(' ')[1]
			const user = jwt.verify(token, process.env.SECRET_KEY)
			const checkRating = await Rating.findOne({ where: { bookId, userId: user.id } })
			const checkBooks = await Book.findOne({ where: { id: bookId } })
			if (!checkBooks) {
				return res.json({ allow: false })
			} else if (checkRating && checkBooks) {
				return res.json({ allow: false })
			}
			return res.json({ allow: true })
		} catch (e) {
			return res.status(401).json('Что-то пошло не так')
		}
	}
}

module.exports = new RatingController()