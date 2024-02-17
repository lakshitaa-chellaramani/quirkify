const { Schema, model } = require('mongoose')

const ItemSchema = new Schema({
    itemName: { type: String, required: true }, //
    itemPrice: { type: Number, required: true }, //
    itemCategory: { type: String, required: true }, // Veg / Non-Veg
    itemSubCategory: { type: String, required: true }, // Desert / Main / Starters / Quick-Bites
    noOfOrders: { type: Number, required: true }, //
    itemMood: { type: String, required: true }, //
    itemCalories: { type: Number, required: true, default : -1 },
    itemDesc: { type: String, required: true }, //
    itemImage: { type: String, required: true },
    itemCookingTime: { type: String, required: true },
})

const Item = new model("items", ItemSchema)

module.exports = Item