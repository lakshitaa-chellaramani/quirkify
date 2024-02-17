const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
    ownerUsername: {
        type: String,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true
    },
    review: {
        type: Number,
        required: true
    }
})

const Order = new model("orders", orderSchema)

module.exports = Order