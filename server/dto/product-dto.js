module.exports = class ProductDto {
    id
    name
    image
    price
    rating
    createdAt
    updatedAt
    typeId
    brandId
    categoryId
    info = []
    images = []
    review = []

    constructor(product, {info}, {image}, review) {
        this.id = product.id
        this.name = product.name
        this.image = product.image
        this.price = product.price
        this.rating = product.rating
        this.createdAt = product.createdAt
        this.updatedAt = product.updatedAt
        this.typeId = product.typeId
        this.brandId = product.brandId
        this.categoryId = product.categoryId
        this.info = info.map(i => ({ id: i.id, title: i.title, description: i.description }))
        this.images = image.map(i => ({ id: i.id, image: i.image }))
        this.review = review
    }
}
