const express = require('express')
const router = express.Router()
const contactForm = require('../controllers/contact-controller')
const authMiddleware = require('../middlewares/auth-middleware')

router.route('/contact').post(authMiddleware, contactForm)

module.exports = router