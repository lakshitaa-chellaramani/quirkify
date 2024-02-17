const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
    orderId: { type: String, required: true },
    orderItem: [String],
    orderPrice: { type: Number, required: true },
    pickedUp: { type: Boolean, default: false },
    isReady: { type: Boolean, default: false },
    deliveryTime: { type: Date }
})

const Order = new model("orders", orderSchema)

module.exports = Order