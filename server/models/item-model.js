const { Schema, model } = require('mongoose')

const ItemSchema = new Schema({
    itemName: { type: String, required: true },
    itemPrice: { type: Number, required: true },
    itemCategory: { type: String, required: true },
    itemMood: { type: String, required: true },
    itemDesc: { type: String, required: true },
    itemImage: { type: Image, required: true },
    itemCookingTime: { type: String, required: true },
})

const Item = new model("contacts", ItemSchema)

module.exports = Item