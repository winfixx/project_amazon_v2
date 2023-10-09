const { Router } = require('express')
const categoryController = require('../controllers/category-controller')
const checkRoleMiddleware = require('../middlewares/check-role-middleware')

const router = new Router()

router.post('/',
    checkRoleMiddleware('ADMIN'),
    categoryController.createCategory
)
router.get('/', categoryController.getCategory)

module.exports = router