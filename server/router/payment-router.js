const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth-middleware')
const { createOrder, getOrders, orderPickedUp, orderReady } = require('../controllers/order-controller')
const adminMiddleware = require('../middlewares/admin-middleware')
const { checkout, paymentVerification } = require("../controllers/payment-controller.js")

router.route('/checkout').post(authMiddleware, checkout)
router.route('/paymentVerification').post(authMiddleware, paymentVerification)


module.exports = router