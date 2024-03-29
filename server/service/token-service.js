const jwt = require('jsonwebtoken')
const { Token, User } = require('../models/models')

class TokenService {
	generateToken(payload) {
		const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_KEY, { expiresIn: '12h' })
		const refreshToken = jwt.sign(payload, process.env.SECRET_REFRESH_KEY, { expiresIn: '30d' })
		return {
			accessToken,
			refreshToken
		}
	}

	validateAccessToken(token) {
		try {
			const userData = jwt.verify(token, process.env.SECRET_ACCESS_KEY)
			return userData
		} catch (e) {
			return null
		}
	}

	validateRefreshToken(token) {
		try {
			const userData = jwt.verify(token, process.env.SECRET_REFRESH_KEY)
			return userData
		} catch (e) {
			return null
		}
	}

	async saveToken(userId, refreshToken) {
		const dataToken = await Token.findOne({ where: { userId: userId } })
		if (dataToken) {
			dataToken.refreshToken = refreshToken
			return dataToken.save()
		}
		const token = await Token.create({ userId: userId, refreshToken })
		return token
	}

	async removeToken(user) {
		const tokenData = await Token.destroy({ where: { userId: user.id } })
		return tokenData
	}

	async findToken(refreshToken) {
		const tokenData = await Token.findOne({ refreshToken: refreshToken })
		return tokenData
	}

}

module.exports = new TokenService()