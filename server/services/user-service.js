const bcrypt = require('bcrypt')
const uuid = require('uuid')
const ApiError = require('../errors/api-error')
const { User } = require('../models/user-model')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const createUser = require('../helpers/createUser')

class UserService {
    async registration(email, password, fullName, role = 'ADMIN', phone, avatar) {
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с таким почтовым адресом (${email}) уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        const user = await User.create({ email, password: hashPassword, fullName, role, phone, avatar, activationLink })
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`)

        return await createUser(user)
    }

    async login(email, password) {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            throw ApiError.BadRequest(`Пользователь с таким email (${email}) не зарегистрирован`)
        }

        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }

        return await createUser(user)
    }

    async logout(refreshToken) {
        return await tokenService.removeToken(refreshToken)
    }

    async activate(activationLink) {
        const user = await User.findOne({ where: { activationLink } })
        if (!user) {
            throw ApiError.BadRequest('Некорректная ссылка')
        }
        user.isActivated = true
        await user.save()
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }

        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }

        const user = await User.findOne({ where: { id: userData.id } })
        return await createUser(user)
    }
}

module.exports = new UserService()
