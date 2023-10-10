const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: 'Не авторизован' })
        }

        const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
        if (!decode) {
            return res.status(401).json({ message: 'Не авторизован' })
        }

        next()
    } catch (e) {
        return res.status(401).json({ message: 'Не авторизован' })
    }
}