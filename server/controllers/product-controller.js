const productService = require('../services/product-service')

class ProductController {
    async createProduct(req, res, next) {
        try {
            const { name, price, info, brandId, typeId, categoryId } = req.body
            const { image } = req.files

            const infoParse = JSON.parse(info)
            const product = await productService.createProduct(name, price, infoParse, brandId, typeId, categoryId, image)

            return res.json(product)
        } catch (e) {
            next(e)
            console.log(e)
        }
    }

    async getALlProduct(req, res, next) {
        try {
            const { name, brandId, typeId, categoryId, limit, page } = req.query

            const products = await productService.getALlProduct(name, +brandId, +typeId, +categoryId, limit, page)
            return res.json(products)
        } catch (e) {
            next(e)
            console.log(e)
        }
    }

    async getByIdProduct(req, res, next) {
        try {
            const { id } = req.params

            const product = await productService.getByIdProduct(id)
            return res.json(product)
        } catch (e) {
            console.log(e)
        }
    }

    async appendFavourites(req, res, next) {
        try {
            const { productId, userId, name, image } = req.body

            const favourites = await productService.appendFavourites(+productId, +userId, name, image)
            return res.json(favourites)
        } catch (e) {
            console.log(e)
        }
    }
    async removeFavourites(req, res, next) {
        try {
            const { productId, userId } = req.query

            const favourites = await productService.removeFavourites(+productId, +userId)
            return res.json(favourites)
        } catch (e) {
            console.log(e)
        }
    }

    async getFavourites(req, res, next) {
        try {
            const { userId } = req.query

            const favourites = await productService.getFavourites(+userId)
            return res.json(favourites)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new ProductController()
