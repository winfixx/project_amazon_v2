const { Router } = require('express')
const userRouter = require('./user-router')
const categoryRouter = require('./category-router')
const brandRouter = require('./brand-router')
const typeRouter = require('./type-router')
const productRouter = require('./product-router')

const router = new Router()

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)
router.use('/product', productRouter)

module.exports = router
