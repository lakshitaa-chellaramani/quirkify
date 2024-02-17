const express = require('express')
const router = express.Router()
const contactForm = require('../controllers/contact-controller')
const authMiddleware = require('../middlewares/auth-middleware')

router.route('/items').get(authMiddleware, getItem)

module.exports = router