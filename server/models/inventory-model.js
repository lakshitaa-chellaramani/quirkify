const { Schema, model } = require('mongoose')

const inventorySchema = new Schema({
    ingredient_name: { type: String, required: true },
    quantity: { type: Number, required: true, default: 10 },
})

const Inventory = new model("inventory", inventorySchema)

module.exports = Inventory