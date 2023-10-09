const { Router } = require('express')
const checkRoleMiddleware = require('../middlewares/check-role-middleware')
const productController = require('../controllers/product-controller')
const authMiddleware = require('../middlewares/auth-middleware')

const router = new Router()

router.post('/all',
    // checkRoleMiddleware('ADMIN'),
    productController.createProduct
)
router.get('/all', productController.getALlProduct)
router.get('/all/:id', productController.getByIdProduct)
router.post('/favourites',
     authMiddleware,
    productController.appendFavourites
)
router.delete('/remove-favourites',
     authMiddleware,
    productController.removeFavourites
)
router.get('/favourites',
     authMiddleware,
    productController.getFavourites
)

module.exports = router
