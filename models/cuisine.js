const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Cuisine = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        origin: {type : String, required: true },
        isHalal: {type: Boolean, required: true},
        isGlutenFree: {type: Boolean, required: true},
        calories: {type: Number, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('cuisines', Cuisine)