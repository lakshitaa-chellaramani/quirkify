const Order = require("../models/order-model")

const createOrder = async (req, res) => {
    const orderData = req.body
    await Order.create(orderData)
    res.status(200).json({ message: "Order Created Successfully." })
}

const getOrders = async (req, res) => {
    const orders = await Order.find({})
    if (!orders) {
        return res.status(404).json({ message: "No Order Found." })
    }
    res.status(200).json({ orders })
}

module.exports = { createOrder, getOrders }



// router.route('/getitems').get(authMiddleware, getAllItems)