const ApiError = require("../errors/api-error")
const { Type } = require("../models/product-model")

class TypeService {
    async createType(name) {
        const type = await Type.findOne({ where: { name } })
        if (type) {
            throw ApiError.BadRequest('Такой тип уже существует')
        }

        return await Type.create({name})
    }
}

module.exports = new TypeService()
