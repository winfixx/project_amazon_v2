const { Router } = require('express')
const checkRoleMiddleware = require('../middlewares/check-role-middleware')
const brandController = require('../controllers/brand-controller')

const router = new Router()

router.post('/',
    checkRoleMiddleware('ADMIN'),
    brandController.createBrand
)
router.get('/', brandController.getBrand)

module.exports = router