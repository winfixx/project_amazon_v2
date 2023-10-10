const ApiError = require("../errors/api-error")
const { Categories } = require("../models/product-model")

class CategoryService {
    async createCategory(name) {
        const category = await Categories.findOne({ where: { name } })
        if (category) {
            throw ApiError.BadRequest('Такая категория уже существует')
        }

        return await Categories.create({name})
    }
}

module.exports = new CategoryService()
