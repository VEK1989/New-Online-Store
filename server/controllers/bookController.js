const { Book, BookInfo, CartBook } = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class BookController {
	async create(req, res, next) {
		try {
			let { name, price, authorId, genreId, info } = req.body
			const { img } = req.files
			let fileName = uuid.v4() + ".jpg"
			img.mv(path.resolve(__dirname, '..', 'static', fileName))
			const book = await Book.create({ name, price, authorId, genreId, img: fileName })

			if (info) {
				info = JSON.parse(info)
				info.forEach(i =>
					BookInfo.create({
						title: i.title,
						description: i.description,
						bookId: book.id
					})
				)
			}
			return res.json(book)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async getAll(req, res, next) {
		try {
			let { authorId, genreId, limit, page } = req.query
			page = page || 1
			limit = limit || 10
			let offset = page * limit - limit
			let books
			if (!authorId && !genreId) {
				books = await Book.findAndCountAll({ limit, offset })
			}
			if (authorId && !genreId) {
				books = await Book.findAndCountAll({ where: { authorId }, limit, offset })
			}
			if (!authorId && genreId) {
				books = await Book.findAndCountAll({ where: { genreId }, limit, offset })
			}
			if (authorId && genreId) {
				books = await Book.findAndCountAll({ where: { authorId, genreId }, limit, offset })
			}
			return res.json(books)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}
	async getOne(req, res, next) {
		try {
			const { id } = req.params
			const book = await Book.findOne(
				{
					where: { id },
					include: [{ model: BookInfo, as: 'info' }]
				}
			)
			return res.json(book)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}
	async delete(req, res, next) {
		try {
			const { id } = req.params
			const book = await Book.findOne({ where: { id } })
			if (book) {
				await Book.destroy({ where: { id } })
				return res.json('Книга удалена')
			} else {
				return res.json('Книги нет в базе данных')
			}
			await CartBook.destroy({ where: { bookId: id } })
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}
}

module.exports = new BookController()