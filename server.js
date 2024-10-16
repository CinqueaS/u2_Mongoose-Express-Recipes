const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require(`morgan`)
const cuisineController = require('./controllers/cuisineController')
const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get(`/`, (req, res) => {
    res.send("You have set up your server.js")
})

app.get(`/Cuisine`, cuisineController.getAllCuisine)
app.get('/Cuisine/:id', cuisineController.getCuisineById)
app.get('/Cuisine/name/:name', cuisineController.getCuisineByName)
app.post(`/Cuisine`, cuisineController.createCuisine)
app.put('/Cuisine/:id', cuisineController.updateCuisine)
app.delete('/Cuisine/:id', cuisineController.deleteCuisine)
app.get(`/Recipe`, cuisineController.getAllRecipes)
app.get(`/Directions`, cuisineController.getAllDirections)
app.get('/Recipe/:id', cuisineController.getRecipeById)
app.get('/Directions/:id', cuisineController.getDirectionsById)
app.post(`/Recipe`, cuisineController.createRecipe)
app.put('/Recipe/:id', cuisineController.updateRecipe)
app.delete('/Recipe/:id', cuisineController.deleteRecipe)
app.post(`/Directions`, cuisineController.createDirections)
app.put('/Directions/:id', cuisineController.updateDirections)
app.delete('/Directions/:id', cuisineController.deleteDirections)
