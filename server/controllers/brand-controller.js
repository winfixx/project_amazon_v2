const { Brand } = require("../models/product-model")
const brandService = require("../services/brand-service")

class BrandController {
    async createBrand(req, res, next) {
        try {
            const { name } = req.body
            const brand = await brandService.createBrand(name)
            return res.json(brand)
        } catch (e) {
            next(e)
        }
    }

    async getBrand(req, res, next) {
        try {
            const brand = await Brand.findAll()
            return res.json(brand)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new BrandController()
