const { Schema, model } = require('mongoose')

const locationSchema = new Schema({
    day: { type: String },
    url: { type: String },
    place: { type: String },
})

const Location = new model("location", locationSchema)

module.exports = Location