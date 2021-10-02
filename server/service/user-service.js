const { User, Cart, Token } = require('../models/models')
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')

const generateJwt = async (user) => {
	const userDto = new UserDto(user) //создаем объект с нужными полями для генерации токенов
	const tokens = tokenService.generateToken({ ...userDto }) // генерируем токены
	await tokenService.saveToken(userDto.id, tokens.refreshToken) // сохраняем токены

	return { ...tokens, user: userDto }
}

class UserService {
	async registration(email, password, role) {
		const candidate = await User.findOne({ where: { email } }) //проверяем в базе есть ли пользователь с таким email
		if (candidate) {
			throw ApiError.badRequest('Пользователь с таким email уже существует') // если есть кидаем ошибку
		}
		const hashPassword = await bcrypt.hash(password, 5) // Хэшируем пароль
		const activationLink = uuid.v4() // создаем рандомную ссылку активации
		const user = await User.create({ email, role, password: hashPassword, activationLink }) // создаем пользователя с нужными полями
		const cart = await Cart.create({ userId: user.id }) // создаем корзину для этого пользователя
		await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`) //вызываем функцию по отправки сообщения активации аккаунта

		const token = generateJwt(user)

		return token
	}

	async activate(activationLink) {
		const user = await User.findOne({ where: { activationLink } }) // ищем пользователя с подходяшей ссылкой
		if (!user) {
			throw ApiError.badRequest('Некорректная ссылка активации') // если его нет кидаем ошибку
		}
		user.isActivated = true // меняем статус активации
		await user.save() // сохраняем пользователя в бд
	}

	async login(email, password) {
		const user = await User.findOne({ where: { email } }) //ищем пользователя по email в бд
		if (!user) {
			throw ApiError.badRequest('Не правильный логин или пароль') // если его нет кидаем ошибку
		}
		const isPassEquals = await bcrypt.compare(password, user.password) // хешируем и сравниваем пароли
		if (!isPassEquals) {
			throw ApiError.badRequest('Не правильный логин или пароль') // если они не совпадают кидаем ошибку
		}
		const token = generateJwt(user)

		return token
	}

	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken) // удаляем токен
		return token
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.unauthorizedError() // проверяем пришел ли токен в функцию
		}
		const userData = tokenService.validateRefreshToken(refreshToken) // ппроверяем токен на валидность
		const tokenFromDb = await tokenService.findToken(refreshToken) // ищем токен в базе данных
		if (!userData || !tokenFromDb) {
			throw ApiError.unauthorizedError() // кидае ошибку если токен не валиден или если его нет в базе
		}
		const user = await User.findOne({ where: { id: tokenFromDb.userId } }) // находим в базе пользователя по id 
		const token = generateJwt(user)

		return token
	}
}

module.exports = new UserService()