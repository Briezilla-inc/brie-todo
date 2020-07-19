// This file has the methods that are going to be used to interact with todo items

// Get all the todo items on route api/v1/todos
exports.getTodos = (req,res, next) => {
    res.send('GET all todos');
}

// ADD a todo item using post request
exports.addTodo = (req, res, next) => {
    res.send('add a todo!');
}

// DELETE item by id
exports.deleteTodo = (req, res, next) => {
    res.send('Delete todo item');
}
