// Imports libraries
const express = require('express')

// Initialises express router
const router = express.Router()

// Imports functions
const { sendNotification } = require('../notify')

// POST (new notification)
router.get('/', async(req,res) => {
    try {
        // Extracts event ID from URL
        // const eventId = req.params.eventId
    
        // Extracts notification data from request body
        // const notification = req.body
    
        // Sends notification to all subscribers of the event
        console.log(`Request body: ${req.body}`);
        // await sendNotification(eventId, notification)
    
        // Sends response
        res.send(`Success`)
    } catch (error) {
        res.status(400).send({message:error})
    }
})

// Exports routes
module.exports = router