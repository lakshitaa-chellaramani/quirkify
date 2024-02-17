const { Schema, model } = require('mongoose')

const cartSchema = new Schema({
    cartOwner: { type: String, required: true },
    products: [
        {
          itemId: Number,
          itemName: String,
          quantity: Number,
          itemPrice: Number
        }
    ]
})

const Cart = new model("cart", cartSchema)

module.exports = Cart