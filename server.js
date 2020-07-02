// Express let's you create routes on the backend. We always have to require it in our server or index file first
const express = require('express');
// dotenv allows us to create global variables for our ports. Stands for `. environment`
const dotenv  = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
//This points dotenv to our config file so it can have access to the stuff in there
dotenv.config({path: './config/config.env'})

//Here we iniatalize express and save it to a variable named 'app'
const app = express();

app.get('/', (req,res) =>{
    res.send('Hello Brie')
})

const PORT = process.env.PORT || 5000;
// connect to port 
app.listen(PORT, console.log(`We connected on ${PORT}!`.yellow.bold))