const Item = require('../models/item-model')


const getStarters = async (req, res) => {
    try {
        var menu = await Item.find({itemSubCategory: "starters"})
        res.status(200).json({menu})
    }
    catch (error) {
        res.status(501).json({message: error})
    }
}

const getMaincourse = async (req, res) => {
    try {
        var menu = await Item.find({itemSubCategory: "main"})
        res.status(200).json({menu})
    }
    catch (error) {
        res.status(501).json({message: error})
    }
}

const getDesserts = async (req, res) => {
    try {
        var starters = await Item.find({itemSubCategory: "dessert"})
    }
    catch (error) {
        res.send("an error occured")
    }
}

const getQuickBites = async (req, res) => {
    try {
        var starters = await Item.find({itemSubCategory: "qb"})
    }
    catch (error) {
        res.send("an error occured")
    }
}

const getStartersFilter = async (req, res) => {
    var category = req.body.veg
    var mood = req.body.mood
    var sorttype = req.body.sorttype
    var menu = null
    try {
        starters = await Item.find({itemSubCategory: "starters"})
        if (category == null) {
            if (mood == null) {
                if (sorttype == "price") {
                    menu = await Item.find({itemSubCategory: "starters"}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({itemSubCategory: "starters"}).sort({noOfOrders: 1})
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({itemSubCategory: "starters", itemMood: mood}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({itemSubCategory: "starters", itemMood: mood}).sort({noOfOrders: 1})
                }
            }
        }
        else {
            if (mood == null) {
                if (sorttype == "price") {
                    menu = await Item.find({itemSubCategory: "starters", itemCategory: category}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({itemSubCategory: "starters", itemCategory: category}).sort({noOfOrders: 1})
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({itemSubCategory: "starters", itemCategory: category, itemMood: mood}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({itemSubCategory: "starters", itemCategory: category, itemMood: mood}).sort({noOfOrders: 1})
                }
            }
        }
        res.status(200).json({menu})
    }
    catch (error) {
        res.status(501).json({message: error})
    }
}


const getMaincourseFilter = async (req, res) => {
    var category = req.body.veg
    var mood = req.body.mood
    var sorttype = req.body.sorttype
    var menu = null

    try {
        if (category == null){
            if (mood == null) {
                if (sorttype == "price") {
                    menu = await Item.find({itemSubCategory: "main"}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({itemSubCategory: "main"}).sort({noOfOrders: 1})
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({itemSubCategory: "main", itemMood: mood}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({itemSubCategory: "main", itemMood: mood}).sort({noOfOrders: 1})
    
                }
            }
        }
        else {
            if (mood == null) {
                if (sorttype == "price") {
                    starters = await Item.find({itemSubCategory: "main", itemCategory: category}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    starters = await Item.find({itemSubCategory: "main", itemCategory: category}).sort({noOfOrders: 1})
                }
            }
            else {
                if (sorttype == "price") {
                    starters = await Item.find({itemSubCategory: "main", itemCategory: category, itemMood: mood}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    starters = await Item.find({itemSubCategory: "main", itemCategory: category, itemMood: mood}).sort({noOfOrders: 1})
    
                }
            }
        }
        res.status(200).json({menu})
    } 
    catch (error) {
        res.status(501).json({message: error})
    }
}

const getQuickbitesFilter = async (req, res) => {
    var category = req.body.veg
    var mood = req.body.mood
    var sorttype = req.body.sorttype
    var menu = null

    try {
        if (category == null){
            if (mood == null) {
                if (sorttype == "price") {
                    menu = await Item.find({itemSubCategory: "qb"}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({itemSubCategory: "qb"}).sort({noOfOrders: 1})
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({itemSubCategory: "qb", itemMood: mood}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({itemSubCategory: "qb", itemMood: mood}).sort({noOfOrders: 1})
    
                }
            }
        }
        else {
            if (mood == null) {
                if (sorttype == "price") {
                    starters = await Item.find({itemSubCategory: "qb", itemCategory: category}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    starters = await Item.find({itemSubCategory: "qb", itemCategory: category}).sort({noOfOrders: 1})
                }
            }
            else {
                if (sorttype == "price") {
                    starters = await Item.find({itemSubCategory: "qb", itemCategory: category, itemMood: mood}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    starters = await Item.find({itemSubCategory: "qb", itemCategory: category, itemMood: mood}).sort({noOfOrders: 1})
    
                }
            }
        }
        res.status(200).json({menu})
    } 
    catch (error) {
        res.status(501).json({message: error})
    }
}

const getDessertFilter = async (req, res) => {
    var category = req.body.veg
    var mood = req.body.mood
    var sorttype = req.body.sorttype
    var menu = null

    try {
        if (category == null){
            if (mood == null) {
                if (sorttype == "price") {
                    menu = await Item.find({itemSubCategory: "dessert"}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({itemSubCategory: "dessert"}).sort({noOfOrders: 1})
                }
            }
            else {
                if (sorttype == "price") {
                    menu = await Item.find({itemSubCategory: "dessert", itemMood: mood}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    menu = await Item.find({itemSubCategory: "dessert", itemMood: mood}).sort({noOfOrders: 1})
    
                }
            }
        }
        else {
            if (mood == null) {
                if (sorttype == "price") {
                    starters = await Item.find({itemSubCategory: "dessert", itemCategory: category}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    starters = await Item.find({itemSubCategory: "dessert", itemCategory: category}).sort({noOfOrders: 1})
                }
            }
            else {
                if (sorttype == "price") {
                    starters = await Item.find({itemSubCategory: "dessert", itemCategory: category, itemMood: mood}).sort({itemPrice: 1})
                }
                else if (sorttype == "trending") {
                    starters = await Item.find({itemSubCategory: "dessert", itemCategory: category, itemMood: mood}).sort({noOfOrders: 1})
    
                }
            }
        }
        res.status(200).json({menu})
    } 
    catch (error) {
        res.status(501).json({message: error})
    }
}








module.exports = { getStarters, getMaincourse, getDesserts, getQuickBites, getDessertFilter, getMaincourseFilter, getStartersFilter, getQuickbitesFilter }