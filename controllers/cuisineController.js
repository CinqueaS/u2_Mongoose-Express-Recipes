const db = require('../db')
const Cuisine = require('../models/cuisine')
const Recipe = require('../models/recipe')
const Directions = require('../models/directions')


const getAllCuisine = async (req, res) => {
    try {
        const Cuisines = await Cuisine.find()
        res.json(Cuisines)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCuisineById = async (req, res) => {
    try {
        const { id } = req.params;
        const Cuisines = await Cuisine.findById(id)
        if (Cuisines) {
            return res.json(Cuisines);
        }
        return res.status(404).send('Cuisine with the specified ID does not exists');
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Cuisine doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

const getCuisineByName = async (req, res) => {
    try {
        const { name } = req.params.name;
        const Cuisines = await Cuisine.find({name: req.params.name})
        if (Cuisines) {
            return res.json(Cuisines);
        }
        return res.status(404).send('Cuisine with the specified name does not exists');
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Cuisine doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}


const createCuisine = async (req, res) => {
    try {
        const newCuisine = await new Cuisine(req.body)
        await newCuisine.save()
        return res.status(201).json({newCuisine})
    }
    catch (e) {
        return res.status(500).json({ e: e.message })
    }
}


const updateCuisine = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedCuisine = await Cuisine.findByIdAndUpdate(id, req.body, { new: true })
        if (updatedCuisine) {
            return res.status(200).json(updatedCuisine)
        }
        throw new Error("Animal not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteCuisine = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Cuisine.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Cuisine deleted");
        }
        throw new Error("Cuisine not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getAllCuisine,
    getCuisineById,
    getCuisineByName,
    createCuisine,
    updateCuisine,
    deleteCuisine
}