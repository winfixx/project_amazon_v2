const { Categories } = require("../models/product-model")
const categoryService = require("../services/category-service")

class CategoryController {
    async createCategory(req, res, next) {
        try {
            const { name } = req.body
            const category = await categoryService.createCategory(name)
            return res.json(category)
        } catch (e) {
            next(e)
        }
    }

    async getCategory(req, res, next) {
        try {
            const category = await Categories.findAll()
            return res.json(category)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CategoryController()
