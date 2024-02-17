const { Schema, model } = require('mongoose')

const locationSchema = new Schema({
    monday: {type: String},
    tuesday: {type: String},
    wednesday: {type: String},
    thursday: {type: String},
    friday: {type: String},
    saturday: {type: String},
    sunday: {type: String},
})

const Location = new model("location", locationSchema)

module.exports = Location