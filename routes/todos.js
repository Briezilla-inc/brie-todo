// This file has the routes related to todos
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => res.send('Booty!'));

// Export the router to server.js so it can be used there
module.exports = router;