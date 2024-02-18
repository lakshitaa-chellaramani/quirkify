const Location = require("../models/location-model")

const getLocation = async (req, res) => {
    try {
        const locations = await Location.find({})
        res.status(200).json({ locations })
    } catch (error) {
        res.status(501).json({ message : "Internal Server Error." })
    }
}

module.exports = getLocation