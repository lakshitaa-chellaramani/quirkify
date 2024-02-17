const express = require('express')
const router = express.Router()
const contactForm = require('../controllers/contact-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const getItem = require('../controllers/item-controller')

router.route('/items').get(authMiddleware, getItem)

module.exports = router