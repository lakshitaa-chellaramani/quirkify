const Item = require('../models/item-model')

const getStarters = async (req, res) => {
    try {
        var menu = await Item.find({ itemSubCategory: "starters" })
        res.status(200).json({ menu })
    }
    catch (error) {
        res.status(501).json({ message: error })
    }
}

const getVeg = async (req, res) => {
    try {
        var menu = await Item.find({ itemCategory: "veg" })
        res.status(200).json({ menu })
    }
    catch (error) {
        res.status(501).json({ message: error })
    }
}

const getNonVeg = async (req, res) => {
    try {
        var menu = await Item.find({ itemCategory: "nonveg" })
        res.status(200).json({ menu })
    }
    catch (error) {
        res.status(501).json({ message: error })
    }
}

const getMaincourse = async (req, res) => {
    try {
        var menu = await Item.find({ itemSubCategory: "main" })
        res.status(200).json({ menu })
    }
    catch (error) {
        res.status(501).json({ message: error })
    }
}

const getDesserts = async (req, res) => {
    try {
        var menu = await Item.find({ itemSubCategory: "dessert" })
        res.status(200).json({ menu })
    }
    catch (error) {
        res.send("an error occured")
    }
}

const getQuickBites = async (req, res) => {
    try {
        var menu = await Item.find({ itemSubCategory: "quickbites" })
        res.status(200).json({ menu })
    }
    catch (error) {
        res.send("an error occured")
    }
}

const getSortedPrice = async (req, res) => {
    try {
        var menu = await Item.find({}).sort({ itemPrice: 1 })
        res.status(200).json({ menu })
    }
    catch (error) {
        res.send("an error occured")
    }
}

const getStartersFilter = async (req, res) => {
    var category = req.body.category
    var mood = req.body.mood
    var sorttype = req.body.sorttype
    var menu = null
    try {
        if (!category) {
            if (!mood) {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "starters" }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "starters" }).sort({ noOfOrders: 1 })
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "starters", itemMood: mood }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "starters", itemMood: mood }).sort({ noOfOrders: 1 })
                }
            }
        }
        else {
            if (!mood) {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "starters", itemCategory: category }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "starters", itemCategory: category }).sort({ noOfOrders: 1 })
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "starters", itemCategory: category, itemMood: mood }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "starters", itemCategory: category, itemMood: mood }).sort({ noOfOrders: 1 })
                }
            }
        }
        res.status(200).json({ menu })
    }
    catch (error) {
        res.status(501).json({ message: error })
    }
}


const getMaincourseFilter = async (req, res) => {
    var category = req.body.category
    var mood = req.body.mood
    var sorttype = req.body.sorttype
    var menu = null



    try {
        if (!category) {
            if (!mood) {
                if (sorttype == "price") {
                    console.log("Inside mood null")
                    menu = await Item.find({ itemSubCategory: "main" }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "main" }).sort({ noOfOrders: 1 })
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "main", itemMood: mood }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "main", itemMood: mood }).sort({ noOfOrders: 1 })

                }
            }
        }
        else {
            if (!mood) {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "main", itemCategory: category }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "main", itemCategory: category }).sort({ noOfOrders: 1 })
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "main", itemCategory: category, itemMood: mood }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "main", itemCategory: category, itemMood: mood }).sort({ noOfOrders: 1 })

                }
            }
        }
        res.status(200).json({ menu })
    }
    catch (error) {
        res.status(501).json({ message: error })
    }
}

const getQuickbitesFilter = async (req, res) => {
    var category = req.body.category
    var mood = req.body.mood
    var sorttype = req.body.sorttype
    var menu = null

    try {
        if (!category) {
            if (!mood) {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "qb" }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "qb" }).sort({ noOfOrders: 1 })
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "qb", itemMood: mood }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "qb", itemMood: mood }).sort({ noOfOrders: 1 })

                }
            }
        }
        else {
            if (!mood) {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "qb", itemCategory: category }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "qb", itemCategory: category }).sort({ noOfOrders: 1 })
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "qb", itemCategory: category, itemMood: mood }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "qb", itemCategory: category, itemMood: mood }).sort({ noOfOrders: 1 })

                }
            }
        }
        res.status(200).json({ menu })
    }
    catch (error) {
        res.status(501).json({ message: error })
    }
}

const getDessertFilter = async (req, res) => {
    var category = req.body.category
    var mood = req.body.mood
    var sorttype = req.body.sorttype
    var menu = null

    try {
        if (!category) {
            if (!mood) {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "dessert" }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "dessert" }).sort({ noOfOrders: 1 })
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "dessert", itemMood: mood }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "dessert", itemMood: mood }).sort({ noOfOrders: 1 })

                }
            }
        }
        else {
            if (!mood) {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "dessert", itemCategory: category }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "dessert", itemCategory: category }).sort({ noOfOrders: 1 })
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({ itemSubCategory: "dessert", itemCategory: category, itemMood: mood }).sort({ itemPrice: 1 })
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({ itemSubCategory: "dessert", itemCategory: category, itemMood: mood }).sort({ noOfOrders: 1 })
                }
            }
        }
        return res.status(200).json({ menu })
    }
    catch (error) {
        res.status(501).json({ message: error })
    }
}

module.exports = { getStarters, getVeg, getNonVeg, getSortedPrice, getMaincourse, getDesserts, getQuickBites, getDessertFilter, getMaincourseFilter, getStartersFilter, getQuickbitesFilter }