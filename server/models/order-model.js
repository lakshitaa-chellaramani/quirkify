const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
    orderId: { type: String, required: true },
    orderPrice: { type: Number, required: true },
    pickedUp: { type: Boolean, required: true },
    isReady: { type: Boolean, required: true },
    deliveryTime: {type: Date, required: false}
})

const Order = new model("orders", orderSchema)

module.exports = Item