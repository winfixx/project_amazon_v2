const { Router } = require('express')
const checkRoleMiddleware = require('../middlewares/check-role-middleware')
const typeController = require('../controllers/type-controller')

const router = new Router()

router.post('/',
    checkRoleMiddleware('ADMIN'),
    typeController.createType
)
router.get('/', typeController.getType)

module.exports = router
