const { Router } = require('express')
const { body } = require('express-validator')
const userController = require('../controllers/user-controller')

const router = new Router()

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.registration
)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)

module.exports = router
