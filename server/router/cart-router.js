const express = require('express')
const router = express.Router()
const contactForm = require('../controllers/contact-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const menuItems = require('../controllers/item-controller')
const cart = require('../controllers/cart-controller')

router.route('/cart').get(authMiddleware, cart.getCart)
router.route('/cart').post(authMiddleware, cart.addToCart)
router.route('/cart').delete(authMiddleware, cart.deleteFromCart)





module.exports = router