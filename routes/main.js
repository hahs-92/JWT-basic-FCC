const express = require('express')
//controllers
const { login,dashboard } = require('../controllers/main')
//middlewares
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/login').post(login)

module.exports = router
