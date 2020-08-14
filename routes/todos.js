// This file has the routes related to todos
const express = require('express')
const router = express.Router();
// Import the todo methods from the controllers folder
const { getTodos, addTodo, deleteTodo } = require('../controllers/todos')

// When the '/' route is hit, call the specific functions needed from controllers folder. CONTROLLAAA
router.route('/').get(getTodos)

router.route('/').post(addTodo)

router.route('/:id').delete(deleteTodo)

// Export the router to server.js so it can be used there.
module.exports = router;