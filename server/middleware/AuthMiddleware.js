const tokenService = require('../service/token-service')

module.exports = function (req, res, next) {
	if (req.method === "OPTIONS") {
		next()
	}
	try {
		const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
		if (!token) {
			return res.status(401).json({ message: "Не авторизован" })
		}
		const userData = tokenService.validateAccessToken(token)
		if (!userData) {
			return res.status(401).json({ message: "Не авторизован" })
		}

		req.user = userData
		next()
	} catch (e) {
		res.status(401).json({ message: "Не авторизован" })
	}
}