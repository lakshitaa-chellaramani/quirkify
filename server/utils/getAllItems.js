const Item = require("../models/item-model")

const getAllItems = async (req, res) => {
    const items = await Item.find({})
    res.status(200).json(items)
}

module.exports = getAllItems