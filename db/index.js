const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://cinqueastafford:Quiche214C@student-cluster.qk4nd.mongodb.net/recipeDatabase?retryWrites=true&w=majority&appName=student-cluster')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })



const db = mongoose.connection

module.exports = db