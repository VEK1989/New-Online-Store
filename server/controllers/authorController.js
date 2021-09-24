const { Author } = require('../models/models')
const ApiError = require('../error/ApiError')

class AuthorController {
	async create(req, res) {
		const { name } = req.body
		const author = await Author.create({ name })
		return res.json(author)
	}
	async getAll(req, res) {
		const authors = await Author.findAll()
		return res.json(authors)
	}
	async delete(req, res) {
		try {
			const { id } = req.params
			const author = await Author.findOne({ where: { id } })
			if (author) {
				await Author.destroy({ where: { id } })
				return res.json('Автор удален')
			} else {
				return res.json('Автора нет в базе данных')
			}
		} catch (e) {
			return res.json(e);
		}
	}
}

module.exports = new AuthorController()