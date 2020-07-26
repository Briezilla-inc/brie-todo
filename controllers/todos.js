// This file has the methods that are going to be used to interact with todo database. NB: Mongoose methods return promises
const Todo = require('../models/Todo');

// Get all the todo items on the route api/v1/todos
exports.getTodos = async (req, res, next) => {
    try{
        const todoList = await Todo.find()

        // return the list of todos
        return res.json({
            success: true,
            count: todoList.length,
            data: todoList
        })
    }
    catch(err) {
        return res.status(500).send({
            success: false,
            error: 'Server Error Bruv'
        })
    }
}

// ADD a todo item using post request
exports.addTodo = async (req, res, next) => {
   try{
       const { text } = req.body;

       const newTodo = await Todo.create(text)

       return res.status(201).send({
           success: true,
           data: newTodo
       })
   }
   catch(err) {
     if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success:false,
                error: messages
            })
        }
        else {
         return res.status(500).send({
             success: false,
             error: 'Server Error Bruv'
         })
        }
   }
}

// DELETE todo item by id
exports.deleteTodo = async (req, res, next) => {
    try {
        //Find todo with a specified Id and delete
        const todo = await Todo.findById(req.params.id)

        if(!todo){
            return res.status(404).json({
                success: false,
                error: 'That todo was not found'
            })
        }
        await todo.remove()
        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        
    }
}
