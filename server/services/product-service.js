const uuid = require('uuid')
const { Op, where } = require('sequelize')
const path = require('path')
const { ProductImage, Product, ProductInfo } = require("../models/product-model")
const ProductDto = require('../dto/product-dto')
const { Review, Favourites, Cart, OrderItem } = require('../models/user-model')
const removeTable = require('../helpers/removeTable')

class ProductService {
    async createProduct(name, price, info, brandId, typeId, categoryId, image) {
        const product = await Product.create({ name, price, brandId, typeId, categoryId })

        image.forEach(async (img, index) => {
            let imageName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', imageName))

            await ProductImage.create({
                image: imageName,
                productId: product.id
            })

            if (index === 0) {
                product.image = imageName
                product.save()
            }
        })

        info.forEach(async i => {
            await ProductInfo.create({
                title: i.title,
                description: i.des,
                productId: product.id
            })
        })

        return product
    }

    async getALlProduct(name, brandId, typeId, categoryId, limit, page) {
        limit = limit || 8
        page = page || 1
        let offset = limit * page - limit

        const product = await Product.findAndCountAll({
            where: {
                name: {
                    [Op.substring]: name
                },
                categoryId: {
                    [Op.or]: { [Op.eq]: categoryId, [Op.gte]: 0 }
                },
                brandId: {
                    [Op.or]: { [Op.eq]: brandId, [Op.gte]: 0 }
                },
                typeId: {
                    [Op.or]: { [Op.eq]: typeId, [Op.gte]: 0 }
                }
            }, limit, offset
        })

        return product
    }

    async getByIdProduct(id) {
        const product = await Product.findOne({ where: { id } })

        let productDto
        await Promise.all([
            { info: await ProductInfo.findAll({ where: { productId: +product.id } }) },
            { image: await ProductImage.findAll({ where: { productId: +product.id } }) },
            { review: await Review.findAndCountAll({ where: { productId: id } }) }
        ])
            .then(([info, image, review]) => {
                return productDto = new ProductDto(product, info, image, review)
            })

        return productDto
    }

    async appendFavourites(productId, userId, name, image) {
        const favourites = await Favourites.findOne({ where: { productId, userId } })

        if (!favourites) {
            return await Favourites.create({ productId, userId, name, image })
        }
        return
    }

    async removeFavourites(productId, userId) {
        return await removeTable(Favourites, productId, userId)
    }

    async getFavourites(userId) {
        return await Favourites.findAll({ where: { userId } })
    }

    async appendOrder(productId, userId, quantity) {
        const cart = await OrderItem.findOne({ where: { productId, userId } })
        const product = await Product.findOne({ where: { id: productId } })

        if (!cart) {
            return await OrderItem.create({ productId, userId, price: product.price, quantity })
        }

        cart.quantity = quantity || cart.quantity
        await cart.save()

        return
    }

    async removeOrder(productId, userId) {
        return await removeTable(OrderItem, productId, userId)
    }

    async getOrder(userId) {
        return await OrderItem.findAll({ where: { userId } })
    }
}

module.exports = new ProductService()
