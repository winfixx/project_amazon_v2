const { Type } = require("../models/product-model")
const typeService = require("../services/type-service")

class TypeController {
    async createType(req, res, next) {
        try {
            const { name } = req.body
            const type = await typeService.createType(name)
            return res.json(type)
        } catch (e) {
            next(e)
        }
    }

    async getType(req, res, next) {
        try {
            const type = await Type.findAll()
            return res.json(type)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new TypeController()