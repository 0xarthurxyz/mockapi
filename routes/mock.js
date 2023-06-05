// Imports libraries
const express = require('express')

// Initialises express router
const router = express.Router()

// Mock endpoint
router.post('/', async(req,res) => {
    try {
        console.log(`Request body: ${req.body}`);
        res.send(`Success`)
    } catch (error) {
        res.status(400).send({message:error})
    }
})

// Exports routes
module.exports = router