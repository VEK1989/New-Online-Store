const { Genre } = require('../models/models')
const ApiError = require('../error/ApiError')

class GenreController {
	async create(req, res, next) {
		try {
			const { name } = req.body
			const genre = await Genre.create({ name })
			return res.json(genre)
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async getAll(req, res, next) {
		try {
			const genres = await Genre.findAll()
			return res.json(genres)
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async delete(req, res, next) {
		try {
			const { id } = req.params
			const genre = await Genre.findOne({ where: { id } })
			if (genre) {
				await Genre.destroy({ where: { id } })
				return res.json('Жанр удален')
			} else {
				return res.json('Жанра нет в базе данных')
			}
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}
}

module.exports = new GenreController()