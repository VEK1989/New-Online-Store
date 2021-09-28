const jwt = require('jsonwebtoken')
const { Token } = require('../models/models')

class TokenService {
	generateToken(payload) {
		const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_KEY, { expiresIn: '20s' })
		const refreshToken = jwt.sign(payload, process.env.SECRET_REFRESH_KEY, { expiresIn: '40m' })
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

	async removeToken(refreshToken) {
		const tokenData = await Token.destroy({ where: { refreshToken: refreshToken } })
		return tokenData
	}

	async findToken(refreshToken) {
		const tokenData = await Token.findOne({ where: { refreshToken: refreshToken } })
		return tokenData
	}

}

module.exports = new TokenService()