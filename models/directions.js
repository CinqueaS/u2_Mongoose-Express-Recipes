const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Directions = new Schema(
    {
        preparation: { type: String, required: true },
        cooking: { type: String, required: true },
        directionsFor: {type: Schema.Types.ObjectId, ref: "recipe_id"}
    },
    { timestamps: true },
)

module.exports = mongoose.model('directions', Directions)