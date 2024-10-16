const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const  Recipe = new Schema(
    {
        ingredients: { type: Array, required: true },
        prepTime: {type: Number, required: true},
        cookTime: {type: Number, required: true},
        difficulty: {type: Number, required: true},
        recipeFor: {type: Schema.Types.ObjectId, ref: "Cuisine_name"}
    },
    { timestamps: true },
)

module.exports = mongoose.model('recipes', Recipe)