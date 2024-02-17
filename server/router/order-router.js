const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth-middleware')
const { createOrder, getOrders, orderPickedUp, orderReady } = require('../controllers/order-controller')
const adminMiddleware = require('../middlewares/admin-middleware')

router.route('/createOrder').post(authMiddleware, createOrder)
router.route('/getOrders').get(authMiddleware, adminMiddleware, getOrders)
router.route('/pickedUp').patch(authMiddleware, adminMiddleware, orderPickedUp)
router.route('/orderReady').post(authMiddleware, adminMiddleware, orderReady)

module.exports = router