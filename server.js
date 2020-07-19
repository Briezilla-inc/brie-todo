// Express let's you create routes on the backend. We always have to require it in our server file first
const express = require('express');
// dotenv allows us to create global variables for our ports. It stands for `. environment`
const dotenv  = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

//This line right here points dotenv to our config file so it can have access to the stuff in there
dotenv.config({path: './config/config.env'})
const todos = require('./routes/todos')

//Here we iniatalize express and save it to a variable named 'app'
const app = express();

// Connect server.js to the todos routes 
app.use('/api/v1/todos', todos)

const PORT = process.env.PORT || 5000;

// connect and listen to a specific port!
app.listen(PORT, console.log(`We connected on ${PORT}`.yellow.bold))