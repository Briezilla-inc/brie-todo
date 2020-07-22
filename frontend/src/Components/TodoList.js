import React, { Component } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

class TodoList extends Component {
    render() {
        return (
            <ul>
                <TodoItem />
            </ul>
        );
    }
}

export default TodoList;