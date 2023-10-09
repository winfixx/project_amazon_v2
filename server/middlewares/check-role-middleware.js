const jwt = require('jsonwebtoken');

module.exports = role => {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: 'Не авторизован'})
            }

            const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            if (decoded.role !== role) {
                return res.status(403).json({message: 'Нет доступа'})
            }

            next()
        } catch (error) {
            res.status(401).json({message: 'Не авторизован'})
        }
    }
}