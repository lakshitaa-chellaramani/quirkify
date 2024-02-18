const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
    orderOwner: {
        type: String,
        required: true
    },
    orderItem: {
        type: [String],
        required: true
    },
    orderPrice: {
        type: Number,
        required: true
    },
    isPickedUp: {
        type: Boolean,
        default: false
    },
    isReady: {
        type: Boolean,
        default: false
    },
    cookingTime: {
        type: String
    },
    pickupTime: {
        type: Date
    },
    ingredients: [
        {
            ingredient_name: String,
            quantity_required: Number,
        }
    ]
})

const Order = new model("orders", orderSchema)

module.exports = Order