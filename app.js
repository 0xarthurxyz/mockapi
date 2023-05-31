// Imports libraries

// Provides the application with the necessary web server functionality.
const express = require('express')

// Restarts Node.js application every time a relevant change occurs to simplify local development.
const { restart } = require('nodemon')

// Provides the application with functionality to parse HTTP responses.
const bodyParser = require('body-parser') 


// Initialises express application
const app = express()
app.use(bodyParser.json())


// Adds homepage route
app.get('/', (req,res)=> {
    res.send('This is the apitest homepage!')
})

// Starts the server
const port = 3000
app.listen(port, ()=>{
    console.log(`Server is up and running at http://localhost:${port} ...`)
})