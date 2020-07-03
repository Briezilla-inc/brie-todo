// This file has the routes related to todos
const express = require('express')
const router = express.Router();
const { getTodos, addTodo, deleteTodo } = require('../controllers/todos')

// When the '/' route is hit, call the getTodos function from controllers folder
router.route('/').get(getTodos).post(addTodo)

router.route('/:id').delete(deleteTodo)
// Export the router to server.js so it can be used there.
module.exports = router;