import React, {useContext, useEffect } from 'react';
import {GlobalContext} from '../context/globalState';
import TodoItem from './TodoItem';

// Holds the list on todos 
const TodoList = () => {
    const { todos, getTodos } = useContext(GlobalContext)
    // Load todos when component gets rendered
    useEffect(() => {
        getTodos();
        console.log('useEffect fired')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ul>
            {
            todos.map(todo => {
                return <TodoItem key={todo._id} todo={todo.text}  identifier={todo._id}/>
            })
            }
        </ul>
    );
    // NB: identifier is the prop I used to identify and delete a specific todo
}

export default TodoList;