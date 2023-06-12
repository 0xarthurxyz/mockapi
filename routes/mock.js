// Imports libraries
const express = require('express')

// Initialises express router
const router = express.Router()

// Mocks POST endpoint
router.post('/', async(req,res) => {
    try {
        console.log(`New request with body:`);
        console.log(req.body);
        res.send(`Mock request successful!`)
    } catch (error) {
        res.status(400).send({message:error})
    }
})

// Echos request
router.post('/echo', async(req,res) => {
    try {
        console.log(`New request with body:`);
        console.log(req.body);
        res.send(req.body)
    } catch (error) {
        res.status(400).send({message:error})
    }
})

// Exports routes
module.exports = router