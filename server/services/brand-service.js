const ApiError = require("../errors/api-error")
const { Brand } = require("../models/product-model")

class BrandService {
    async createBrand(name) {
        const brand = await Brand.findOne({ where: { name } })
        if (brand) {
            throw ApiError.BadRequest('Такой бренд уже существует')
        }

        return await Brand.create({ name })
    }
}

module.exports = new BrandService()
