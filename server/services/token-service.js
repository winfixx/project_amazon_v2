const jwt = require('jsonwebtoken')
const Token = require('../models/token-model')

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' })
        return {
            accessToken,
            refreshToken
        }
    }

    validateRefreshToken(token) {
        try {
            const tokenData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return tokenData
        } catch (e) {
            return null
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({ where: { userId } })
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }

        return await Token.create({ userId, refreshToken })
    }

    async removeToken(refreshToken) {
        return await Token.destroy({ where: { refreshToken } })
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({ where: { refreshToken } })
        return tokenData
    }
}

module.exports = new TokenService()
