const { validationResult } = require('express-validator')
const ApiError = require('../errors/api-error')
const userService = require('../services/user-service')

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }

            const { email, password, fullName, role, phone, avatar } = req.body
            console.log(req.body);
            const userData = await userService.registration(email, password, fullName, role, phone, avatar)

            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (e) {
            next(e) 
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const refresh = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(refresh)
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async activate(req, res, next) {
        try {
            const { link } = req.params
            await userService.activate(link)
            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()
