// Imports libraries
const { json } = require('body-parser');
const express = require('express')

// Initialises express router
const router = express.Router()

// Mock endpoint
router.post('/', async(req,res) => {
    try {
        console.log(`New request with body:`);
        console.log(req.body);
        res.send(`Mock request successful!`)
    } catch (error) {
        res.status(400).send({message:error})
    }
})

// Exports routes
module.exports = router